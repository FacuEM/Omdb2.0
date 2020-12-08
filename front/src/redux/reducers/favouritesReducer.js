import { FETCH_FAVS, REMOVE_FAV } from "../constants";

const initialState = {
  favourites: [],
};

const removeDuplicates = (arr) => {
  const flag = {};
  const unique = [];
  arr.forEach((e) => {
    if (!flag[e.title]) {
      flag[e.title] = true;
      unique.push(e);
    }
  });
  return unique;
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FAVS:
      return { ...state, favourites: removeDuplicates(action.payload) };
    case REMOVE_FAV:
      return {
        ...state,
        favourites: state.favourites.filter((f) => f.id !== action.payload),
      };
    default:
      return state;
  }
}
