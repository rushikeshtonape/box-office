import React from "react";
import { useParams } from "react-router";
import Cast from "../components/show/Cast";
import Details from "../components/show/Details";
import Seasons from "../components/show/Seasons";
import ShowMainData from "../components/show/ShowMainData";

import { InfoBlock, ShowPageWrapper } from "./Show.Styled";
import { useShow } from "../misc/custom-hook";

const Show = () => {
  const { id } = useParams();
  const { show, isLoading, error } = useShow(id);

  if (isLoading) {
    return <div>Data is being Loaded</div>;
  }
  if (error) {
    return <div>Error occured : {error}</div>;
  }

  return (
    <ShowPageWrapper>
      <InfoBlock>
        <ShowMainData
          image={show.image}
          name={show.name}
          rating={show.rating}
          summary={show.summary}
          tags={show.genres}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>
      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>

      <InfoBlock>
        <h2>Casts</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
