import { useState } from "react";
import useSound from "use-sound";
import delete_todo from "./song/delete_todo.mp3";
import InputForm from "./InputForm";
import ListTodo from "./ListTodo";
import "./main.css";
const add_todo = new Audio("./song/add_todo.mp3");

// const delete_todo = new Audio("./song/delete_todo.mp3");

const ToDoList = () => {
  const [itemValue, setItemValue] = useState([]);

  const playAudio = () => {
    const [play] = useSound(delete_todo);
    play;
  };
  const handelTodoAdd = (todoName) => {
    const newObject = {
      title: todoName,
    };
    // verification of reality todo
    if (!newObject.title) return;

    setItemValue([...itemValue, newObject]);
  };
  const handelTodoDelete = (item) => {
    const newArray = itemValue.filter((todo, index) => index !== item);
    setItemValue(newArray);
    playAudio();
  };
  return (
    <div className="toDoContainer">
      <InputForm valueInput={handelTodoAdd} />

      {itemValue.map((todo, index) => (
        <ListTodo
          index={index}
          key={index}
          list={todo.title}
          onDelete={handelTodoDelete}
        />
      ))}
    </div>
  );
};
export default ToDoList;
