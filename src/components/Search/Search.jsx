import { useState } from "react";
import Input from "./../Input/Input";
import Button from "../Button/Button";
import { ReactComponent as SearchIcon } from "./../../assets/icons/search.svg";
import styles from "./Search.module.scss";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const changelHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const onSearch = () => {
    let toFind = searchInput.toLowerCase();
    props.searchHandler(toFind);
    setSearchInput("");
  };
  return (
    <div className={styles.searchContainer}>
      <Input
        placeholder="Поиск по статьям"
        type="text"
        inputStyle="search"
        value={searchInput}
        onChange={changelHandler}
      ></Input>
      <div className={styles.btnContainer}>
        <Button className={styles.button} btnStyle="search" onClick={onSearch}>
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
};

export default Search;
