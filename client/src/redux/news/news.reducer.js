import { SET_NEWS, SET_ARCHIVED } from "./news.types";

const newsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        newsList: action.payload,
      };
    case SET_ARCHIVED:
      return {
        ...state,
        archivedList: action.payload,
      };
    default:
      return state;
  }
};
export default newsReducer;
