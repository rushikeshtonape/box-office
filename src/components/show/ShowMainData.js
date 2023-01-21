import React from "react";
import IMG_PLACEHOLDER from "../../image/image_not_found.jpg";
import { Star } from "../Styled.js";

const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <div>
      <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div>
        <div>
          <h1>{name}</h1>
          <div>
            <Star />
            <span>{rating.average || "N/A"}</span>
          </div>
        </div>
        <div dangerouslySet InnerHTML={{ _html: summary }} />
        <div>
          Tags:{""}
          <div>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMainData;
