import React from "react";
import { useSelector, useDispatch } from "react-redux";
import listArticlesSelector from "redux/selecters/listArticlesSelector";
import updateSelector from "redux/selecters/updateSelector";
import styled from "styled-components";
import {
  selectArticle,
  toggleEdite,
  selectAllCheckbox,
  setCurrentArticles,
  updateCurrentArticle,
} from "redux/actions/editAction";
import { deleteCheckedArticles } from "redux/actions/deleteAction";
import { getUpdateInputValue } from "redux/actions/updateAction";
import { saveAction } from "redux/actions/saveAction";

const Tabel = styled.table`
  margin-top: 33px;
  border: 1px solid black;
`;
const Th = styled.th`
  border: 1px solid black;
`;
const Td = styled.td`
  border: 1px solid black;
`;
const Tr = styled.tr``;

function ListArticle() {
  const { listArticles, isEdite, selectAll } = useSelector(
    listArticlesSelector
  );

  const dispatch = useDispatch();
  const handelOnChange = (e, id) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(updateCurrentArticle(id, name, value));
  };
  const handelDelete = (id) => {
    console.log(id);
    dispatch(deleteCheckedArticles(id));
  };

  return (
    <>
      <br />
      {isEdite ? (
        <>
          <button
            onClick={() => {
              dispatch(saveAction());
            }}
          >
            Save
          </button>
          <button onClick={() => dispatch(toggleEdite(false))}>Cancel</button>
        </>
      ) : (
        <button
          onClick={() => {
            dispatch(toggleEdite(true));
            dispatch(setCurrentArticles());
          }}
        >
          Edit
        </button>
      )}
      <button
        onClick={() =>
          listArticles.map((item) => item.isSelected && handelDelete(item.id))
        }
      >
        Delete All
      </button>
      <Tabel>
        <Tr>
          <Th>
            <input
              type="checkbox"
              checked={selectAll}
              onChange={() => dispatch(selectAllCheckbox())}
            />
          </Th>
          <Th>Cancel</Th>
          <Th>Firstname</Th>
          <Th>Title</Th>
          <Th>Content</Th>
          <Th>Date</Th>
        </Tr>
        {listArticles.map(
          ({ id, author, title, articalContent, isSelected, createdAt }) => {
            return (
              <Tr key={id}>
                <Td>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    disabled={isEdite}
                    onChange={() => {
                      dispatch(selectArticle(id));
                    }}
                  />
                </Td>
                <Td></Td>
                <Td>{author}</Td>
                <Td>
                  {isEdite && isSelected ? (
                    <input
                      type="text"
                      name="title"
                      // defaultValue={title}
                      value={title}
                      onChange={(e) => handelOnChange(e, id)}
                    />
                  ) : (
                    title
                  )}
                </Td>
                <Td>
                  {isEdite && isSelected ? (
                    <>
                      <textarea
                        type="text"
                        name="articalContent"
                        // defaultValue={articalContent}
                        value={articalContent}
                        onChange={(e) => handelOnChange(e, id)}
                      />{" "}
                    </>
                  ) : (
                    articalContent
                  )}
                </Td>
                <Td>{createdAt}</Td>
              </Tr>
            );
          }
        )}
      </Tabel>
    </>
  );
}
export default ListArticle;
