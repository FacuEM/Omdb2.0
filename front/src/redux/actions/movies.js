import { FETCH_MOVIE, FETCH_MOVIES } from "../constants";
import axios from "axios";

// fetch all the movies from the omdb API and fill the reducer
export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`https://omdbapi.com/?apikey=438a7f8d&s=${text}`)
    .then((res) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data.Search,
      })
    )
    .catch((err) => console.log(err));
};

// fetch a single movie according to id and fill the reducer
export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(`https://omdbapi.com/?apikey=438a7f8d&i=${id}`)
    .then((res) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
