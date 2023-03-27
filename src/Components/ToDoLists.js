import React, { useEffect } from "react";
import "./ToDoLists.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteList, fetchList } from "../Redux/Action";
import LoadingSpinner from "../UI/LoadingSpinner";

const ToDoLists = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.Reducer.lists);
  const isShowSpinner = useSelector((state) => state.Reducer.showSpinner);
  const fetchData = async () => {
    const response = await fetch(
      "https://redux-to-do-app-7e58a-default-rtdb.firebaseio.com/todo.json"
    );
    const responseData = await response.json();
    console.log(responseData);
    const loadedLists = [];
    for (const key in responseData) {
      loadedLists.push({
        key: key,
        id: key,
        title: responseData[key].title,
      });
    }
    dispatch(fetchList(loadedLists));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const deleteListHandler = async (key, id) => {
    dispatch(deleteList(id));
    await fetch(
      `https://redux-to-do-app-7e58a-default-rtdb.firebaseio.com/todo/${key}.json`,
      {
        method: "DELETE",
      }
    );
  };
  return (
    <div>
      {!isShowSpinner && <LoadingSpinner />}
      {isShowSpinner && lists.length > 0 && (
        <div>
          {lists.map((list) => (
            <div
              className="list"
              key={list.id}
              onClick={() => deleteListHandler(list.key, list.id)}
            >
              {/* <div className="id">{list.id}</div> */}
              <div className="title">{list.title}</div>
            </div>
          ))}
        </div>
      )}
      {isShowSpinner && lists.length < 0 && (
        <h2>You Don't Have Any Task TO Do...</h2>
      )}
    </div>
  );
};
export default ToDoLists;
