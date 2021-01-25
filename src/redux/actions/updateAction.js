export const getUpdateInputValue = (name, value) => (dispatch, getState) => {
  dispatch({
    type: "SET_UPDATE_INPUT",
    payload: {
      [name]: value,
    },
  });
};
