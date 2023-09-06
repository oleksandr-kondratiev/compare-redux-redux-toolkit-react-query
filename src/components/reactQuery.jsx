import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import { API_URL } from "../constants/api";

const fetchPosts = async () => {
  const { data } = await axios.get(`${API_URL}/posts`);

  return data;
};

export const ReactQuery = () => {
  const { isLoading, data, isSuccess, isError, error } = useQuery(
    "posts",
    fetchPosts
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {isSuccess && data.map(({ id, title }) => <li key={id}>{title}</li>)}
    </ul>
  );
};
