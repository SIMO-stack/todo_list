const INITIAL_STATE = {
  article: [
    {
      id: 1,
      title: "Read Manga",
      articalContent: "Value Time",
      completed: false,
      createdAt: new Date(),
      userId: 1,
    },
    {
      id: 2,
      title: "Write React Code",
      articalContent: "West Time",
      completed: false,
      createdAt: new Date(),
      userId: 1,
    },
  ],
  checkedIds: [],
  currentData: [],
  isEdite: false,
  users: [{ id: 1, firstName: "hicham", lastName: "Ba3ella" }],
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "Add_ARTICLE":
      return {
        ...state,
        article: [...state.article, action.payload],
      };
    case "DELETE_ARTICLE":
      return {
        ...state,
        article: state.article.filter((item) => item.id != action.payload),
        checkedIds: [],
      };
    case "SELECT_ARTICLE":
      return {
        ...state,
        checkedIds: state.checkedIds.includes(action.payload)
          ? state.checkedIds.filter((checkedId) => checkedId != action.payload)
          : [...state.checkedIds, action.payload],
      };

    case "TOGGLE_EDITE":
      return {
        ...state,
        isEdite: action.payload,
      };
    case "SELECT_ALL":
      return {
        ...state,
        checkedIds:
          state.article.length == state.checkedIds.length
            ? []
            : state.article.map((item) => {
                return item.id;
              }),
      };
    case "SAVE_ARTICLE":
      return {
        ...state,
        article: state.article.map((item) => {
          const newArticle = state.currentData.find((a) => a.id == item.id);
          return newArticle ? newArticle : item;
        }),
      };
    case "SET_CURRENT_ARTICLES":
      return {
        ...state,
        currentData: state.checkedIds.map((item) => {
          const article = state.article.find((a) => a.id == item);
          return article;
        }),
      };
    case "UPDATE_CURRENT_ARTICLE":
      return {
        ...state,
        currentData: state.currentData.map((item) => {
          return item.id == action.payload.id
            ? {
                ...item,
                ...action.payload,
              }
            : item;
        }),
      };
    default:
      return state;
  }
};
export default appReducer;
