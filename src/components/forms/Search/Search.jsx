import styles from "./Search.module.scss";
import Input from "../Input/Input";
import Button from "../../Button/Button";
import { ReactComponent as SearchIcon } from "./../../../assets/icons/search.svg";
import { useState } from "react";
import SearchContainer from "../SearchContainer/SearchContainer";

const Search = ({ searchHandler }) => {
  const [searchInput, setSearchInput] = useState("");

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    let toFind = searchInput.trim().toLowerCase();
    searchHandler(toFind);
    setSearchInput("");
  };
  return (
    <SearchContainer>
      <form onSubmit={onSearch}>
        <Input
          placeholder="Поиск по статьям"
          type="text"
          inputStyle="search"
          value={searchInput}
          onChange={changeHandler}
        ></Input>
        <div className={styles.btnContainer}>
          <Button type="submit" className={styles.button} btnStyle="search">
            <SearchIcon />
          </Button>
        </div>
      </form>
    </SearchContainer>
  );
};

export default Search;
