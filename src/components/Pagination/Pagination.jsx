import styles from "./Pagination.module.scss";
import usePagination from "./../../hook/usePagination";
import cn from "classnames";

const Pagination = (props) => {
  const data = props.data;
  const {
    firstContentIndex,
    lastContentIndex,
    // nextPage,
    // prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 9,
    count: data.length,
  });

  props.sendFirstIndex(firstContentIndex);
  props.sendLastIndex(lastContentIndex);

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
