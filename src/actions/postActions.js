import axios from "axios";
import { FETCH_POSTS, SET_LOADING } from "./actionTypes";

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
    });

    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      dispatch({
        type: FETCH_POSTS,
        posts: response.data,
        status: 'Done'
      });

      dispatch({
        type: SET_LOADING,
      });
    });
  };
};
