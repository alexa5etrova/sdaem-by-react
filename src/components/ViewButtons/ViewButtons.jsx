import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import cn from "classnames";

import Button from "./../Button/Button";
import LinkTag from "./../LinkTag/LinkTag";
import { ReactComponent as ListIcon } from "./list.svg";
import { ReactComponent as TileIcon } from "./tile.svg";
import { ReactComponent as SortIcon } from "./sort.svg";
import { ReactComponent as LocationIcon } from "./../../assets/icons/location.svg";
import { ReactComponent as Arrow } from "./../../assets/icons/chevron.svg";

import styles from "./ViewButtons.module.scss";

const ViewButtons = ({ view, setView }) => {
  const [sort, setSort] = useState("");
  const [searchSymbol, setSearchSymbol] = useState("&");

  const url = useLocation();
  const navigate = useNavigate();
  const sortRef = useRef();

  useEffect(() => {
    url.search === "" ? setSearchSymbol("?") : setSearchSymbol("&");

    if (url.search.includes("desc")) {
      sortRef.current.value = "desc";
      setSort("desc");
    }
    if (url.search.includes("asc")) {
      sortRef.current.value = "asc";
      setSort("asc");
    }
  }, [url]);

  const handleSort = () => {
    switch (sortRef.current.value) {
      case "asc":
        navigate(
          url.pathname +
            url.search.replace(searchSymbol + `_sort=price&_order=${sort}`, "") +
            searchSymbol +
            "_sort=price&_order=asc"
        );
        break;
      case "desc":
        navigate(
          url.pathname +
            url.search.replace(searchSymbol + `_sort=price&_order=${sort}`, "") +
            searchSymbol +
            "_sort=price&_order=desc"
        );
        break;
      case "default":
        navigate(
          url.pathname + url.search.replace(searchSymbol + `_sort=price&_order=${sort}`, "")
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.buttonsWrapper}>
      <div className={styles.selectWrapper}>
        <span className={styles.selectArrow}>
          <Arrow width="13" height="13" />
        </span>
        <SortIcon width="15" height="15" className={styles.sortIcon} />
        <select
          ref={sortRef}
          className={cn(styles.select)}
          name="sortView"
          onChange={() => handleSort()}
        >
          <option className={styles.option} defaultValue value="default">
            По умолчанию
          </option>
          <option className={styles.option} value="asc">
            По возрастанию цены
          </option>
          <option className={styles.option} value="desc">
            По убыванию цены
          </option>
        </select>
      </div>
      <div className={styles.btns}>
        <Button btnStyle={view === "tile" ? "viewOff" : "viewOn"} onClick={() => setView("list")}>
          <ListIcon
            className={cn({
              [styles.iconGray]: view === "tile",
              [styles.iconViolet]: view === "list",
            })}
          />
          Список
        </Button>
        <Button btnStyle={view === "list" ? "viewOff" : "viewOn"} onClick={() => setView("tile")}>
          <TileIcon
            className={cn({
              [styles.iconGray]: view === "list",
              [styles.iconViolet]: view === "tile",
            })}
          />
          Плитки
        </Button>
        <LinkTag linkStyle="whiteToMap" to="/map">
          <LocationIcon width="14" height="16" className={styles.locationIcon} />
          Показать на карте
        </LinkTag>
      </div>
    </div>
  );
};

export default ViewButtons;
