import { createSelector } from "reselect";
import moment from "moment";

export default createSelector(
  (state) => state.app,
  (state) => state.search,
  (appState, searchState) => {
    const result = {
      isEdite: appState.isEdite,
      selectAll: appState.article.length == appState.checkedIds.length,
      listArticles: appState.article
        .map(({ id, title, articalContent, createdAt, userId }) => {
          const user = appState.users.find((user) => user.id == userId);
          const currentArticle = appState.currentData.find(
            (item) => item.id == id
          );
          return {
            id,
            title: currentArticle ? currentArticle.title : title,
            articalContent: currentArticle
              ? currentArticle.articalContent
              : articalContent,
            createdAt: moment(createdAt).format("DD/MM/YYYY HH:mm:ss"),
            author: user.firstName + " " + user.lastName,
            isSelected: appState.checkedIds.includes(id),
          };
        })
        .filter((search) => {
          return (
            search.title
              .toLowerCase()
              .includes(searchState.searchField.toLowerCase()) ||
            search.articalContent
              .toLowerCase()
              .includes(searchState.searchField.toLowerCase()) ||
            search.author
              .toLowerCase()
              .includes(searchState.searchField.toLowerCase())
          );
        }),
    };
    return result;
  }
);
