import { FETCH_FAVS, REMOVE_FAV } from "../constants";

const initialState = {
  favourites: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FAVS:
      return { ...state, favourites: action.payload };
    case REMOVE_FAV:
      return {
        ...state,
        favourites: state.favourites.filter((f) => f.id !== action.payload),
      };
    default:
      return state;
  }
}
