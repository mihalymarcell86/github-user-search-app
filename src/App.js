import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";

function App() {
  const API = `https://api.github.com/users/`;
  const [data, setData] = useState(null);
  const [colorScheme, setColorScheme] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    searchUser("octocat");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setColorScheme("dark");
      document.documentElement.classList.add("dark");
    } else setColorScheme("light");
  }, []);

  function changeInput(value) {
    setInput(value);
    setNotFound(false);
  }

  function handleSearch() {
    searchUser(input);
  }

  function searchUser(username) {
    fetch(`${API}${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message !== "Not Found") setData(data);
        else setNotFound(true);
      });
  }

  function changeColorScheme() {
    document.documentElement.classList.toggle("dark");
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    data && (
      <>
        <Header
          colorScheme={colorScheme}
          changeColorScheme={changeColorScheme}
        />
        <main>
          <SearchBar
            onSearch={handleSearch}
            notFound={notFound}
            value={input}
            onChange={changeInput}
          />
          <SearchResult data={data} />
        </main>
      </>
    )
  );
}

export default App;
