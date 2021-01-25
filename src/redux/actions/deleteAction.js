export const deleteCheckedArticles = (id) => (dispatch, getState) => {
  dispatch({
    type: "DELETE_ARTICLE",
    payload: id,
  });
};
