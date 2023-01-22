import React from "react";
import IMG_PLACEHOLDER from "../../image/image_not_found.jpg";
import { Star } from "../Styled.js";
import { MainDataWrapper, Headline, TagList } from "./ShowMainData.styled";

const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div className="text-slide">
        <Headline>
          <h1>{name}</h1>
          <div>
            <Star active />
            <span>{rating.average || "N/A"}</span>
          </div>
        </Headline>
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <div>
          Tags:{""}
          <TagList>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </TagList>
        </div>
      </div>
    </MainDataWrapper>
  );
};

export default ShowMainData;
