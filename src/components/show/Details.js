import React from "react";
import { DetailsWrapper } from "./Details.styled";

const Details = ({ status, premiered, network }) => {
  return (
    <DetailsWrapper>
      <p>
        Status : <span>{status}</span>
      </p>
      <p>
        premiered : {premiered} {network ? `on ${network.name}` : null}
      </p>
    </DetailsWrapper>
  );
};

export default Details;
