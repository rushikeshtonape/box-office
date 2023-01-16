import React from "react";
import { Link } from "react-router-dom";
import { StyledShowCard } from "./ShowCard.styled";

const ShowCard = ({ id, name, image, summary }) => {
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}…..`
    : "No description";

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>
      <p>{summaryAsText}</p>

      <div className="btns">
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button">star me</button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
