import { combineReducers } from "redux";

import appReducer from "./reducers/appReducer";
import inputReducer from "./reducers/inputReducer";
import searchReducer from "./reducers/searchReducer";

export default combineReducers({
  app: appReducer,
  input: inputReducer,
  search: searchReducer,
});
