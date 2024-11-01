function ListTodo({ list, onDelete, index }) {
  // string index li
  let indexText = index;

  // upper first letter
  const [firs, ...other] = list;
  const firsLetter = [firs.toUpperCase(), ...other].join("");

  return (
    <div className="list__toDo">
      <h4 className="text__todo">
        {indexText + 1}. {firsLetter}
      </h4>
      <button className="btn__delete" onClick={() => onDelete(index)}>
        Delete todo
      </button>
    </div>
  );
}

export default ListTodo;
