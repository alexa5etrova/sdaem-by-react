import { useState } from "react";

import SearchIcon from "assets/icons/Search";
import Button from "components/Button/Button";
import Input from "components/forms/Input/Input";

import SearchContainer from "components/forms/SearchContainer/SearchContainer";

import styles from "./Search.module.scss";


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
    <SearchContainer stl="search">
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
