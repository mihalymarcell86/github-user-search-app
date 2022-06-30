import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";

function App() {
  const API = `https://api.github.com/users/`;
  const [data, setData] = useState(null);
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    searchUser("octocat");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function searchUser(username) {
    fetch(`${API}${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message !== "Not Found") setData(data);
      });
  }

  function changeColorScheme() {
    const htmlClass = document.documentElement.classList;
    htmlClass.toggle("dark");
    setColorScheme(htmlClass.contains("dark") ? "dark" : "light");
  }

  return (
    data && (
      <>
        <Header
          colorScheme={colorScheme}
          changeColorScheme={changeColorScheme}
        />
        <main>
          <SearchBar searchUser={searchUser} />
          <SearchResult data={data} />
        </main>
      </>
    )
  );
}

export default App;
