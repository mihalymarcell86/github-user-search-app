import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import locationIcon from "./assets/icon-location.svg";
import blogIcon from "./assets/icon-website.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import companyIcon from "./assets/icon-company.svg";

function App() {
  const API = `https://api.github.com/users/`;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API}octocat`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [API]);

  function searchUser(username) {
    fetch(`${API}${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message !== "Not Found") setData(data);
      });
  }

  if (data) {
    const joined = new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
    }).format(new Date(data.created_at));

    return (
      <>
        <Header />
        <main>
          <SearchBar searchUser={searchUser} />
          <section className="search-result">
            <img src={data.avatar_url} alt="" className="result__avatar" />

            <div className="result__header">
              <p className="result__name">
                {data.name ? data.name : data.login}
              </p>
              <p className="result__login">@{data.login}</p>
              <p className="result__joined">Joined {joined}</p>
            </div>

            <p className={`result__bio ${!data.bio ? "bio--na" : ""}`}>
              {data.bio ? data.bio : "This profile has no bio."}
            </p>

            <div className="result__stats">
              <div className="stats__header">Repos</div>
              <div className="stats__header">Followers</div>
              <div className="stats__header">Following</div>
              <div className="stats__data">{data.public_repos}</div>
              <div className="stats__data">{data.followers}</div>
              <div className="stats__data">{data.following}</div>
            </div>

            <section className="result__info">
              <div className={`info__row ${!data.location ? "info--na" : ""}`}>
                <object
                  type="image/svg+xml"
                  data={locationIcon}
                  aria-label="location"
                  className="info__icon"
                />
                <p>{data.location ? data.location : "Not Available"}</p>
              </div>
              <div className={`info__row ${!data.blog ? "info--na" : ""}`}>
                <object
                  type="image/svg+xml"
                  data={blogIcon}
                  aria-label="blog"
                  className="info__icon"
                />
                {data.blog ? (
                  <a href={data.blog} target="_blank" rel="noreferrer">
                    {data.blog}
                  </a>
                ) : (
                  <p>Not Available</p>
                )}
              </div>
              <div
                className={`info__row ${
                  !data.twitter_username ? "info--na" : ""
                }`}
              >
                <object
                  type="image/svg+xml"
                  data={twitterIcon}
                  aria-label="Twitter"
                  className="info__icon"
                />
                <p>
                  {data.twitter_username
                    ? data.twitter_username
                    : "Not Available"}
                </p>
              </div>
              <div className={`info__row ${!data.company ? "info--na" : ""}`}>
                <object
                  type="image/svg+xml"
                  data={companyIcon}
                  aria-label="company"
                  className="info__icon"
                />
                <p>{data.company ? data.company : "Not Available"}</p>
              </div>
            </section>
          </section>
        </main>
      </>
    );
  }
}

export default App;
