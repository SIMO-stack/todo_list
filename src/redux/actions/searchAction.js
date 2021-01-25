export const setsearchField = (e) => (dispatch, getState) => {
  dispatch({
    type: "SET_SEARCH_FIELD",
    payload: e.target.value,
  });
};
