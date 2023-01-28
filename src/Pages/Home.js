import React from "react";
import { useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import CustomRadio from "../components/CustomRadio";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/show/ShowGrid";
import { apiGet } from "../misc/config";
import { useLastQuery } from "../misc/custom-hook";
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from "./Home.styled";
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
      <SearchInput
        type="text"
        placeholder="Search for Something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="show-search"
            type="radio"
            value="shows"
            checked={isSearchShow}
            onChange={onRadioChange}
          />
        </div>

        <div>
          <CustomRadio
            label="Actors"
            id="actor-search"
            value="people"
            checked={!isSearchShow}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>

      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
