import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiGet } from "../misc/config";

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        if (isMounted) {
          setShow(results);
          setisLoading(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setisLoading(false);
      });

    return (isMounted) => false;
  }, [id]);

  console.log(show);

  if (isLoading) {
    return <div>Data is being Loaded</div>;
  }
  if (error) {
    return <div>Error occured : {error}</div>;
  }

  return <div>This is Show Page</div>;
};

export default Show;
