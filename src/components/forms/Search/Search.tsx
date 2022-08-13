import { ChangeEvent, FormEvent, useState } from "react";

import Input from "../Input/Input";
import Button from "../../Button/Button";

import SearchContainer from "../SearchContainer/SearchContainer";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.scss";
import SearchIcon from "../../../assets/icons/Search";

const Search = ({ searchHandler }: SearchProps): JSX.Element => {
  const [searchInput, setSearchInput] = useState<string>("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let toFind: string = searchInput.trim().toLowerCase();
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
          name="searchNews"
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
