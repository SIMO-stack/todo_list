export const addArticle = () => (dispatch, getState) => {
  const input = getState().input.inputValue;
  const textArea = getState().input.textAreaValue;
  dispatch({
    type: "Add_ARTICLE",
    payload: {
      id: Math.random(),
      title: input,
      articalContent: textArea,
      createdAt: new Date(),
      userId: 1,
    },
  });
  dispatch({
    type: "SET_INPUT",
    payload: {
      inputValue: "",
      textAreaValue: "",
    },
  });
};
