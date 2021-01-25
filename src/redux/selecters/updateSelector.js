import { createSelector } from "reselect";

export default createSelector(
  (state) => state.update,
  (state) => state.app,
  (updateState, appState) => {
    const result = {
      inputUpdateValue: updateState.inputUpdateValue,
      textAreaUpdateValue: updateState.textAreaUpdateValue,
      checkedIds: appState.checkedIds,
    };
    return result;
  }
);
