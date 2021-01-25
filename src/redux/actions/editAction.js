export const selectArticle = (id) => (dispatch, getState) => {
  let article = getState().app.article.find((art) => art.id == id);
  dispatch({
    type: "SELECT_ARTICLE",
    payload: id,
  });
  dispatch({
    type: "SET_UPDATE_INPUT",
    payload: {
      inputValue: article.title,
      textAreaValue: article.articalContent,
    },
  });
};

export const toggleEdite = (isEdite) => (dispatch, getState) => {
  dispatch({
    type: "TOGGLE_EDITE",
    payload: isEdite,
  });
};

export const selectAllCheckbox = () => (dispatch, getState) => {
  dispatch({
    type: "SELECT_ALL",
  });
};

export const updateCurrentArticle = (id, name, value) => (
  dispatch,
  getState
) => {
  dispatch({
    type: "UPDATE_CURRENT_ARTICLE",
    payload: {
      id,
      [name]: value,
    },
  });
};
export const setCurrentArticles = () => (dispatch, getState) => {
  dispatch({
    type: "SET_CURRENT_ARTICLES",
  });
};
