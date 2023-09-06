import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import postsSlice from "../store/reduxToolkit/posts/slice";

import { API_URL } from "../constants/api";

const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } =
  postsSlice.actions;

export const ReduxToolkit = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.toolkitPosts);

  useEffect(() => {
    dispatch(fetchPostsRequest());

    fetch(`${API_URL}/posts`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchPostsSuccess(data)))
      .catch((error) => dispatch(fetchPostsFailure(error)));
  }, [dispatch]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {posts.length && posts.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
  );
};
