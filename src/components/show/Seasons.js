import React from "react";

const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>
        Seasons in Total :<span>{seasons.length}</span>
      </p>
      <p>
        Episodes in total:{" "}
        <span>
          {seasons.reduce((acc, seasons) => acc + seasons.episodeOrder, 0)}
        </span>
      </p>
      <div>
        {seasons.map((seasons) => (
          <div key={seasons.id}>
            <div>
              <p>Seasons : {seasons.number}</p>
              <p>
                Episode : <span>{seasons.episodeOrder}</span>
              </p>
            </div>
            <div>
              Aired:{" "}
              <span>
                {seasons.premiereDate} - {seasons.endDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
