import React from "react";
import { SeasonsWrapper, SeasonList } from "./Seasons.styled";

const Seasons = ({ seasons }) => {
  return (
    <SeasonsWrapper>
      <p>
        Seasons in Total :<span>{seasons.length}</span>
      </p>
      <p>
        Episodes in total:{" "}
        <span>
          {seasons.reduce((acc, seasons) => acc + seasons.episodeOrder, 0)}
        </span>
      </p>
      <SeasonList>
        {seasons.map((seasons) => (
          <div key={seasons.id} className="season-item">
            <div className="left">
              <p>Seasons : {seasons.number}</p>
              <p>
                Episode : <span>{seasons.episodeOrder}</span>
              </p>
            </div>
            <div className="right">
              Aired:{" "}
              <span>
                {seasons.premiereDate} - {seasons.endDate}
              </span>
            </div>
          </div>
        ))}
      </SeasonList>
    </SeasonsWrapper>
  );
};

export default Seasons;
