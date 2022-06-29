import searchIcon from "../assets/icon-search.svg";
import { useState } from "react";

export default function SearchBar(props) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function changeInput({ target }) {
    setInput(target.value);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      {/* <img src={searchIcon} alt="" className="search-bar__icon" /> */}
      <object
        type="image/svg+xml"
        data={searchIcon}
        aria-label="search"
        className="search-bar__icon"
      />
      <input
        type="text"
        placeholder="Search GitHub username…"
        className="search-bar__input"
        value={input}
        onChange={changeInput}
      />
      <button
        className="search-bar__button"
        onClick={() => props.searchUser(input)}
      >
        Search
      </button>
    </form>
  );
}
