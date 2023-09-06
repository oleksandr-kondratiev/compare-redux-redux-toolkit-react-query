import { combineReducers } from "redux";

import postsReducer from "./redux/posts/reducer";
import postsSlice from "./reduxToolkit/posts/slice";

const rootReducer = combineReducers({
  posts: postsReducer,
  toolkitPosts: postsSlice.reducer,
});

export default rootReducer;
