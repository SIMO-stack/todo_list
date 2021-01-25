import React from "react";
import { useSelector, useDispatch } from "react-redux";
import inputSelector from "../redux/selecters/inputSelector";
import { getInputValue } from "../redux/actions/inputAction";
import { addArticle } from "../redux/actions/addAction";

function AddArticle() {
  const { inputValue, textAreaValue } = useSelector(inputSelector);
  const dispatch = useDispatch();
  const handelOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(getInputValue(name, value));
  };
  return (
    <>
      <input
        type="text"
        name="inputValue"
        value={inputValue}
        onChange={handelOnChange}
      />
      <br />
      <textarea
        type="text"
        name="textAreaValue"
        value={textAreaValue}
        onChange={handelOnChange}
      />
      <br />
      <button onClick={() => dispatch(addArticle())}>add</button>
    </>
  );
}
export default AddArticle;
