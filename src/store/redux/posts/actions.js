export const POST_ACTIONS = {
  FETCH_POST_REQUEST: "FETCH_POST_REQUEST",
  FETCH_POST_SUCCESS: "FETCH_POST_SUCCESS",
  FETCH_POST_FAILURE: "FETCH_POST_FAILURE",
};

export const fetchPostRequest = () => ({
  type: POST_ACTIONS.FETCH_POST_REQUEST,
});

export const fetchPostSuccess = (data) => ({
  type: POST_ACTIONS.FETCH_POST_SUCCESS,
  payload: data,
});

export const fetchPostFailure = (error) => ({
  type: POST_ACTIONS.FETCH_POST_FAILURE,
  payload: error,
});
