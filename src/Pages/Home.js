import React from "react";
import { useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/show/ShowGrid";
import { apiGet } from "../misc/config";
import { useLastQuery } from "../misc/custom-hook";
const Home = () => {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const isSearchShow = searchOption === "shows";

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) =>
      setResults(result)
    );

    // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    //   .then((r) => r.json())
    //   .then((result) => {
    //     setResults(result);
    //   });
  };
  const onInputChange = (ev) => {
    //console.log(ev.target.value);
    setInput(ev.target.value);
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  const renderResults = () => {
    // setResults(results);
    if (results && results.length === 0) {
      return <div>No results found</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }

    return null;
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for Something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <div>
        <label htmlFor="show-search">
          Shows
          <input
            id="show-search"
            type="radio"
            value="shows"
            checked={isSearchShow}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="actor-search">
          Actors
          <input
            id="actor-search"
            type="radio"
            value="people"
            checked={!isSearchShow}
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>

      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
