import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../Redux/Action";
import Card from "../UI/Card";
import "./ListForm.css";
const ListForm = () => {
  const [title, setTitle] = useState("");
  //   const [isValid, setIsValid] = useState(true);
  const lists = useSelector((state) => state.Reducer.lists);
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();

    // console.log(title);
    const newList = {
      title: title,
    };
    addData(newList);
    setTitle("");
  };
  const addData = async (newList) => {
    await fetch(
      "https://redux-to-do-app-7e58a-default-rtdb.firebaseio.com/todo.json",
      {
        method: "POST",
        body: JSON.stringify(newList),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(addList(newList));
    console.log(newList);
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button disabled={!title} id="action">
          Add List
        </button>
      </form>
    </Card>
  );
};
export default ListForm;
