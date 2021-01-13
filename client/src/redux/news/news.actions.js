import { SET_NEWS, SET_ARCHIVED } from "./news.types";
import axios from "axios";

export const getNews = (type) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:4000/api/news?type=${type}`, {
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Content-Type": "application/json",
      })
      .then((response) => {
        if (type === "news") {
          dispatch({ type: SET_NEWS, payload: response.data });
        } else if (type === "archived") {
          dispatch({ type: SET_ARCHIVED, payload: response.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const updateNews = (type, id) => {
  return function (dispatch) {
    axios
      .post(
        `http://localhost:4000/api/news`,
        { type, id },
        {
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Content-Type": "application/json",
        }
      )
      .then((response) => {
        console.log(response.data);

        dispatch(getNews(type));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
