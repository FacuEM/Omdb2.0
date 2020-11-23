import { FETCH_FAVS, REMOVE_FAV } from "../constants";
import axios from "axios";

// add a movie to favorites
export const addFav = (data) => {
  return axios.post("/api/favourite/newFav", data);
};

// brings all the favorite movies corresponding to a user and fill the reducer
export const fetchFavs = (id) => (dispatch) => {
  return axios.get(`/api/favourite/allFavs/${id}`).then((res) =>
    dispatch({
      type: FETCH_FAVS,
      payload: res.data,
    })
  );
};

// remove a movie from favorites and clean the reducer
export const removeFav = (id) => (dispatch) => {
  const FavID = id;
  return axios.delete(`/api/favourite/removeFav/${id}`).then(() =>
    dispatch({
      type: REMOVE_FAV,
      payload: FavID,
    })
  );
};
