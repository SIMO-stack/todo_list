import React from "react";
import ListArticle from "./components/listArticle";
import AddArticle from "./components/addArticle";
import SearchBox from "./components/searchBox";

function App() {
  console.log("app");
  return (
    <div>
      <AddArticle />
      <br />
      <SearchBox />
      <ListArticle />
    </div>
  );
}

export default App;
