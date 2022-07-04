import searchIcon from "../assets/icon-search.svg";

export default function SearchBar(props) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function changeInput({ target }) {
    props.onChange(target.value);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <img
        src={searchIcon}
        alt="search github username"
        className="search-bar__icon"
      />
      <input
        type="text"
        placeholder="Search GitHub username…"
        className="search-bar__input"
        value={props.input}
        onChange={changeInput}
      />
      {props.notFound && <div className="search-bar__error">No results</div>}
      <button className="search-bar__button" onClick={props.onSearch}>
        Search
      </button>
    </form>
  );
}
