import cn from "classnames";
import { useEffect } from "react";
import usePagination from "./../../hook/usePagination";

import styles from "./Pagination.module.scss";

const Pagination = ({ data, sendFirstIndex, sendLastIndex, contentPerPage }) => {
  const { firstContentIndex, lastContentIndex, page, setPage, totalPages } = usePagination({
    contentPerPage: contentPerPage,
    count: data.length,
  });

  useEffect(() => {
    sendFirstIndex(firstContentIndex);
    sendLastIndex(lastContentIndex);
  }, [firstContentIndex, lastContentIndex]);

  return (
    <div className={styles.pagination}>
      {[...Array(totalPages).keys()].map((el) => (
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
