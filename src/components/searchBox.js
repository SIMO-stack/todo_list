import React from "react";
import { useSelector, useDispatch } from "react-redux";
import searchSelector from "../redux/selecters/searchSelctor";
import { setsearchField } from "../redux/actions/searchAction";

function SearchBox() {
  const { search } = useSelector(searchSelector);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="search"
        placeholder="Search Article"
        value={search}
        onChange={(e) => dispatch(setsearchField(e))}
      />
    </>
  );
}
export default SearchBox;
