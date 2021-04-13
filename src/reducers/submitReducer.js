import { FETCH_POSTS, SET_LOADING } from "../actions/actionTypes";

const initialState = {
  posts: [],
  loading: false,
  submited: false,
  error: "Email already exist",
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: !state.loading };
    case FETCH_POSTS:
      return { ...state, payload: action.payload, status: action.status };
    default:
      return state;
  }
}
