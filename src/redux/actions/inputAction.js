export const getInputValue = (name, value) => (dispatch, getState) => {
  dispatch({
    type: "SET_INPUT",
    payload: {
      [name]: value,
    },
  });
};
