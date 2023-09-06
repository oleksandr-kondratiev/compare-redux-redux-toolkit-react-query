import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchPostFailure,
  fetchPostRequest,
  fetchPostSuccess,
} from "../store/redux/posts/actions";

import { API_URL } from "../constants/api";

export const Redux = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostRequest());

    fetch(`${API_URL}/posts`)
      .then((response) => response.json())
      .then((data) => dispatch(fetchPostSuccess(data)))
      .catch((error) => dispatch(fetchPostFailure(error)));
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
