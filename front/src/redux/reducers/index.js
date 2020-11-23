import { combineReducers } from "redux";

import authReducer from "./authReducer";
import moviesReducer from "./moviesReducer";
import adminReducer from "./adminReducer";
import favouritesReducer from "./favouritesReducer";

export default combineReducers({
  auth: authReducer,
  movies: moviesReducer,
  admin: adminReducer,
  favourites: favouritesReducer,
});
