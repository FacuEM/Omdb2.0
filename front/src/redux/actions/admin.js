import { FETCH_USERS } from "../constants";
import axios from "axios";

//fetch all users
export const fetchUsers = () => (dispatch) => {
  return axios.get("/api/admin/users").then((response) =>
    dispatch({
      type: FETCH_USERS,
      payload: response.data,
    })
  );
};
