import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import Cast from "../components/show/Cast";
import Details from "../components/show/Details";
import Seasons from "../components/show/Seasons";
import ShowMainData from "../components/show/ShowMainData";
import { apiGet } from "../misc/config";
import { InfoBlock, ShowPageWrapper } from "./Show.Styled";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return { isLoading: false, error: null, show: action.show };
    }

    case "FETCH_FAILED": {
      return { ...prevState, isLoading: false, error: action.error };
    }

    default:
      return prevState;
  }
};

const Show = () => {
  const { id } = useParams();

  const initialState = {
    show: null,
    isLoading: true,
    error: null,
  };
  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const [show, setShow] = useState(null);
  // const [isLoading, setisLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", show: results });
        }
      })
      .catch((err) => {
        dispatch({ type: "FETCH_SUCCESS", error: err.message });
      });

    return (isMounted) => false;
  }, [id]);

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
