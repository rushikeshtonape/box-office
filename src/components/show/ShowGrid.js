import React from "react";
import ShowCard from "./ShowCard";
import IMAGE_NOT_FOUND from "../../image/Image_not_available.png";
import { FlexGrid } from "../Styled";
import { useShows } from "../../misc/custom-hook";

const ShowGrid = ({ data }) => {
  const [starredShows, starredDispatch] = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = () => {
          if (isStarred) {
            starredDispatch({ type: "REMOVE", showId: show.id });
          } else {
            starredDispatch({ type: "ADD", showId: show.id });
          }
        };

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
