import React, { useEffect, useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { useShows } from "../misc/custom-hook";
import { apiGet } from "../misc/config";
import ShowGrid from "../components/show/ShowGrid";
const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map((showId) => apiGet(`/shows/${showId}`));

      Promise.all(promises)
        .then((apiData) => apiData.map((show) => ({ show })))
        .then((results) => {
          setShows(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {isLoading && <div>data is Being loaded</div>}
      {error && <div>Error Occured : {error} </div>}
      {!isLoading && !shows && <div>No shows are added</div>}
      {!isLoading && !error && shows && (
        <div>
          <ShowGrid data={shows} />
        </div>
      )}
    </MainPageLayout>
  );
};

export default Starred;
