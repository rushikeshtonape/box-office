import { useEffect, useReducer } from "react";

function showReducer(prevState, action) {
  switch (action.type) {
    case "ADD": {
      return [...prevState, action.showID];
    }
    case "REMOVE": {
      return prevState.filter((showId) => showId !== action.showID);
    }

    default:
      return prevState;
  }
}
function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persisted = localStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : initial;
  }); //useReducer also have a 3rd argument that is (initial function)

  useEffect(() => {
    localStorage.setItem(JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export function useShows(key = "shows") {
  return usePersistedReducer(showReducer, [], key);
}
