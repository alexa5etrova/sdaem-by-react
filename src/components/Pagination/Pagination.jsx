
import usePagination from "./../../hook/usePagination";
import cn from "classnames";
import { useEffect } from "react";
import { NEWS_PER_PAGE } from "../../const/const";
import styles from "./Pagination.module.scss";

const Pagination = (props) => {
  const data = props.data;
  const { firstContentIndex, lastContentIndex, page, setPage, totalPages } =
    usePagination({
      contentPerPage: NEWS_PER_PAGE,
      count: data.length,
    });

  useEffect(() => {
    props.sendFirstIndex(firstContentIndex);
    props.sendLastIndex(lastContentIndex);
  }, [firstContentIndex, lastContentIndex, props]);

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
