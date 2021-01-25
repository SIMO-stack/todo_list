const INITIAL_STATE = {
  inputValue: "",
  textAreaValue: "",
};

const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default inputReducer;
