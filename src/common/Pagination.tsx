import React, { useMemo } from "react";

interface PaginationProps {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  size,
  totalElements,
  totalPages,
  onPageChange,
  onSizeChange,
  pageSizeOptions = [5, 10, 20, 50],
  maxVisiblePages = 10,
}) => {
  if (totalPages <= 0) return null;

  /* ----------- Page Window Logic ----------- */
  const pageNumbers = useMemo(() => {
    const half = Math.floor(maxVisiblePages / 2);

    let start = Math.max(page - half, 0);
    let end = start + maxVisiblePages;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisiblePages, 0);
    }

    return Array.from({ length: end - start }, (_, i) => start + i);
  }, [page, totalPages, maxVisiblePages]);

  /* ----------- Showing Range ----------- */
  const startRecord = page * size + 1;
  const endRecord = Math.min((page + 1) * size, totalElements);

  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center mt-2 gap-2">
      
      {/* Left Side Info */}
      <div>
        Showing <strong>{startRecord}</strong> to{" "}
        <strong>{endRecord}</strong> of{" "}
        <strong>{totalElements}</strong> entries
      </div>

      {/* Page Size Selector */}
      {onSizeChange && (
        <div className="d-flex align-items-center gap-2">
          <label className="mb-0">Rows per page:</label>
          <select
            className="form-select form-select-sm"
            style={{ width: "auto" }}
            value={size}
            onChange={(e) => {
              onSizeChange(Number(e.target.value));
              onPageChange(0); // reset to first page
            }}
          >
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Pagination Controls */}
      <nav>
        <ul className="pagination mb-0">

          {/* First */}
          <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(0)}
              disabled={page === 0}
              aria-label="First Page"
            >
              «
            </button>
          </li>

          {/* Previous */}
          <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(page - 1)}
              disabled={page === 0}
              aria-label="Previous Page"
            >
              ‹
            </button>
          </li>

          {/* Page Numbers */}
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${pageNumber === page ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber + 1}
              </button>
            </li>
          ))}

          {/* Next */}
          <li
            className={`page-item ${
              page === totalPages - 1 ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(page + 1)}
              disabled={page === totalPages - 1}
              aria-label="Next Page"
            >
              ›
            </button>
          </li>

          {/* Last */}
          <li
            className={`page-item ${
              page === totalPages - 1 ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(totalPages - 1)}
              disabled={page === totalPages - 1}
              aria-label="Last Page"
            >
              »
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;