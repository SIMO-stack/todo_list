import { createSelector } from "reselect";

export default createSelector(
  (state) => state.search,
  (searchState) => {
    const result = {
      search: searchState.search,
    };
    return result;
  }
);
