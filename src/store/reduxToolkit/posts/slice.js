import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "toolkitPosts",
  initialState: initialState,
  reducers: {
    fetchPostsRequest(state) {
      state.loading = true;
    },
    fetchPostsSuccess(state, action) {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchPostsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice;
