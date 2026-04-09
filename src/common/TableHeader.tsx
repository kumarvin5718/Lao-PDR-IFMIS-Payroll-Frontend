import React, { useMemo } from "react";
import {
  ArrowUp,
  ArrowDown,
  ArrowDownUp,
} from "react-bootstrap-icons";

type RenderCell = {
  label: string;
  colSpan: number;
  rowSpan: number;
  accessor?: string;
  sortable?: boolean;
  className?: string;
};

const isVisible = (col: TableHeaderColumn) => !col.hidden;

const getColSpan = (col: TableHeaderColumn): number => {
  if (!col.children?.length) return 1;

  return col.children
    .filter(isVisible)
    .reduce((sum, child) => sum + getColSpan(child), 0);
};

const getDepth = (cols: TableHeaderColumn[]): number => {
  let max = 1;

  cols.filter(isVisible).forEach((col) => {
    if (col.children?.some(isVisible)) {
      max = Math.max(max, 1 + getDepth(col.children));
    }
  });

  return max;
};

const buildRows = (
  cols: TableHeaderColumn[],
  depth: number,
  level = 0,
  rows: RenderCell[][] = []
): RenderCell[][] => {
  if (!rows[level]) rows[level] = [];

  cols.filter(isVisible).forEach((col) => {
    const hasChildren = col.children?.some(isVisible);

    const colSpan = hasChildren ? getColSpan(col) : 1;
    const rowSpan = hasChildren ? 1 : depth - level;

    rows[level].push({
      label: col.label,
      colSpan,
      rowSpan,
      accessor: col.accessor,
      sortable: col.sortable,
      className: col.className,
    });

    if (hasChildren) {
      buildRows(col.children!, depth, level + 1, rows);
    }
  });

  return rows;
};

const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  headerClassName = "",
  headerStyle,
  sortBy,
  sortDir,
  onSort,
}) => {
  const rows = useMemo(() => {
    const depth = getDepth(columns);
    return buildRows(columns, depth);
  }, [columns]);

  const getSortIcon = (accessor?: string) => {
    if (!accessor) return null;

    if (accessor !== sortBy) {
      return <ArrowDownUp size={14} className="text-light" />;
    }

    return sortDir === "asc" ? (
      <ArrowUp size={14} className="text-success" />
    ) : (
      <ArrowDown size={14} className="text-success" />
    );
  };

  return (
    <thead className={headerClassName}>
      {rows.map((row, rIdx) => (
        <tr key={`hdr-row-${rIdx}`}>
          {row.map((cell, cIdx) => {
            const isSortableLeaf =
              cell.sortable && cell.accessor;

            return (
              <th
                key={`hdr-cell-${rIdx}-${cIdx}`}
                colSpan={cell.colSpan}
                rowSpan={cell.rowSpan}
                className={`text-center ${isSortableLeaf ? "sortable-column" : ""
                  } ${cell.className ?? ""}`}
                style={{
                  cursor: isSortableLeaf ? "pointer" : "default",
                  userSelect: "none",
                  verticalAlign: "middle",
                  whiteSpace: "nowrap",
                  ...headerStyle,
                }}
                onClick={() =>
                  isSortableLeaf &&
                  onSort &&
                  onSort(cell.accessor!)
                }
              >
                <div className="d-flex justify-content-center align-items-center gap-1">
                  <span>{cell.label}</span>

                  {isSortableLeaf && (
                    <span
                      style={{ width: "18px" }}
                      className="d-inline-flex justify-content-center"
                    >
                      {getSortIcon(cell.accessor)}
                    </span>
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;

export interface TableHeaderColumn {
  label: string;
  accessor?: string;              // field name for sorting
  sortable?: boolean;             // enable sorting
  hidden?: boolean;
  className?: string;
  children?: TableHeaderColumn[];
}

export interface TableHeaderProps {
  columns: TableHeaderColumn[];
  headerClassName?: string;
  headerStyle?: React.CSSProperties;
  sortBy?: string;
  sortDir?: "asc" | "desc";
  onSort?: (field: string) => void;
}