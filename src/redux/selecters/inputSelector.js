import { createSelector } from "reselect";

export default createSelector(
  (state) => state.input,
  (inputState) => {
    const result = {
      inputValue: inputState.inputValue,
      textAreaValue: inputState.textAreaValue,
    };
    return result;
  }
);
