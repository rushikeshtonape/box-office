import React from "react";

const ActorCard = ({ name, country, birthday, deathday, gender, image }) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `${gender}` : null}
      </h1>
      <p>{country ? `come from ${country}` : "unknown country"}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
    </div>
  );
};

export default ActorCard;
