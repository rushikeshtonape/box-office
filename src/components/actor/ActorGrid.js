import React from "react";
import ActorCard from "./ActorCard";
import IMAGE_NOT_FOUND from "../../image/Image_not_available.png";

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          id={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
