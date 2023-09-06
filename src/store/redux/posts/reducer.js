import { POST_ACTIONS } from "./actions";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ACTIONS.FETCH_POST_REQUEST:
      return { ...state, loading: true };
    case POST_ACTIONS.FETCH_POST_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case POST_ACTIONS.FETCH_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
