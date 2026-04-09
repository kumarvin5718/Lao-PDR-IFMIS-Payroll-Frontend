import React from "react";

export interface TableColumn<T> {
  header: string;
  accessor?: keyof T;
  render?: (row: T, index: number) => React.ReactNode;
}

interface TableBodyProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  page?: number;
  size?: number;
}

const TableBody = <T,>({
  data,
  columns,
  page = 0,
  size = 0,
}: TableBodyProps<T>) => {
  return (
    <tbody>
      {data.length === 0 ? (
        <tr>
          <td colSpan={columns.length} className="text-center">
            No Records Found
          </td>
        </tr>
      ) : (
        data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="text-center">
                {column.render
                  ? column.render(row, rowIndex)
                  : column.accessor
                  ? String(row[column.accessor])
                  : null}
              </td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
};

export default TableBody;