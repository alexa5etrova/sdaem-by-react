import { useState } from "react";

interface usePaginationProps {
  contentPerPage: number;
  count: number;
}

const usePagination = ({ contentPerPage, count }: usePaginationProps) => {
  const [page, setPage] = useState<number>(1);
  const pageCount: number = Math.ceil(count / contentPerPage);
  const lastContentIndex: number = page * contentPerPage;
  const firstContentIndex: number = lastContentIndex - contentPerPage;

  const setPageSAFE = (num: number): void => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };
  return {
    totalPages: pageCount,
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};
export default usePagination;
