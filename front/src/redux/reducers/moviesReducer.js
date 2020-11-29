import { FETCH_MOVIE, FETCH_MOVIES } from "../constants";

const initialState = {
  movies: [],
  movie: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: action.payload };
    case FETCH_MOVIE:
      return { ...state, movie: action.payload };
    default:
      return state;
  }
}
