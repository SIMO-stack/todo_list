export const saveAction = () => (dispatch, getState) => {
  dispatch({
    type: "SAVE_ARTICLE",
  });
  dispatch({
    type: "TOGGLE_EDITE",
    payload: false,
  });
};
