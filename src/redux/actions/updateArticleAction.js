export const updateArticle = () => (dispatch, getState) => {
  const title = getState().update.inputUpdateValue;
  const articalContent = getState().update.textAreaUpdateValue;
  const checkedIds = getState().app.checkedIds;

  dispatch({
    type: "UPDATE_ARTICLE_ITEM",
    payload: {
      id: checkedIds,
      title,
      articalContent,
    },
  });
};
