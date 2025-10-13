import type { MouseEvent, FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { IPagination } from "./types";

export const Pagination: FC<IPagination> = ({
  page,
  perPage,
  total,
  onPageChange,
  maxToShow = 5,
}) => {
  const pagesCount = Math.ceil(total / perPage);
  const pagesArray = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const showFirstDots = page > 3;

  const showLastDots = page < pagesCount - 2;

  const handlePrev = () => {
    if (page <= 1) return;
    onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page >= pagesCount) return;
    onPageChange(page + 1);
  };

  const handlePageChange = (e: MouseEvent<HTMLButtonElement>) => {
    const name = (e.target as HTMLButtonElement).name;
    onPageChange(Number(name));
  };

  return (
    <div className="flex gap-2" data-testid="pagination">
      <button type="button" className="cursor-pointer py-1 px-1 rounded-2xl shadow-2xl hover:bg-active" onClick={handlePrev}>
        <ChevronLeft />
      </button>
      {pagesArray.length <= maxToShow ? (
        pagesArray.map((_page) => (
          <button
            key={_page}
            type="button"
            onClick={handlePageChange}
            name={String(_page)}
            className={`py-2 px-3 rounded-2xl shadow-2xl cursor-pointer hover:bg-active ${page === _page ? " text-white bg-primary" : ""}`}
          >
            {_page}
          </button>
        ))
      ) : (
        <>
          {page > 1 && (
            <button type="button" name="1" onClick={handlePageChange}>
              1
            </button>
          )}
          {showFirstDots && "..."}
          {page > 2 && (
            <button
              type="button"
              name={String(page - 1)}
              onClick={handlePageChange}
            >
              {page - 1}
            </button>
          )}
          <button type="button" className="text-red-500 font-bold">
            {page}
          </button>
          {page < pagesCount - 1 && (
            <button
              type="button"
              name={String(page + 1)}
              onClick={handlePageChange}
            >
              {page + 1}
            </button>
          )}
          {showLastDots && "..."}
          {page < pagesCount && (
            <button type="button" onClick={handleNext}>
              {pagesCount}
            </button>
          )}
        </>
      )}
      <button type="button" data-testid="next-page-btn" className="cursor-pointer py-1 px-1 rounded-2xl shadow-2xl hover:bg-active" onClick={handleNext}>
        <ChevronRight />
      </button>
    </div>
  );
};
