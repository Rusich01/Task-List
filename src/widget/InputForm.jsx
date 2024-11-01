import React, { useState } from "react";
const add_todo = new Audio("./song/add_todo.mp3");

function InputForm({ valueInput }) {
  const [inputValue, setInputValue] = useState("");
  const [playSon, setPlaySon] = useState();

  const handelFormOnSubmit = (elem) => {
    elem.preventDefault();
    valueInput(inputValue);
    setInputValue("");
  };
  const handelInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handelFormOnSubmit}>
      <input
        type="text"
        placeholder="Enter todo"
        value={inputValue}
        onChange={handelInputChange}
      />
      <button type="submit">Add todo</button>
    </form>
  );
}

export default InputForm;
