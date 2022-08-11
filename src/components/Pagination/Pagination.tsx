import cn from "classnames";
import { useEffect } from "react";
import usePagination from "../../hook/usePagination";

import styles from "./Pagination.module.scss";
import { PaginationProps } from "./Pagination.props";

const Pagination = ({
  data,
  sendFirstIndex,
  sendLastIndex,
  contentPerPage,
}: PaginationProps): JSX.Element => {
  const { firstContentIndex, lastContentIndex, page, setPage, totalPages } = usePagination({
    contentPerPage: contentPerPage,
    count: data.length,
  });

  useEffect(() => {
    sendFirstIndex(firstContentIndex);
    sendLastIndex(lastContentIndex);
  }, [firstContentIndex, lastContentIndex]);

  const arr = Array(totalPages);
  const updArr: number[] = [];

  for (let i = 0; i === arr.length; i++) {
    updArr.push(i);
  }

  return (
    <div className={styles.pagination}>
      {updArr.map((el) => (
        <p
          onClick={() => setPage(el + 1)}
          key={el}
          className={cn(styles.page, { [styles.active]: page === el + 1 })}
        >
          {el + 1}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
