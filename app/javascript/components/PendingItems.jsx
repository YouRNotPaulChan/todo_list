import React, { useState } from 'react';
import DeleteButton from './DeleteButton.jsx';

const PendingItems = ({ todo, handleSubmit }) => {
  const [editing, setEditing] = useState(false);
  const [pendingTodo, setPendingTodo] = useState(todo);

  const handleClick = () => {
    setEditing(true);
  }

  const handleChange = (event) => {
    setPendingTodo({
      ...pendingTodo,
      title: event.target.value
    });
  }

  const handleCompleteChange = (event) => {
    setPendingTodo({
      ...pendingTodo,
      complete: event.target.checked ? 'completed' : 'uncompleted'
    });
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
      handleSubmit(pendingTodo);
    }
  }

  const handleBlur = () => {
    setEditing(false);
  }

  return editing ? (
    <div className="form-check editing">
      <input
        className="form-check-input"
        disable="true"
        type="checkbox"
        defaultChecked={pendingTodo.complete == "completed"}
        id={`checkbox${pendingTodo.id}`} />
      <input
        type="text"
        className="form-control-plaintext"
        id="staticEmail2"
        value={pendingTodo.title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        autoFocus/>
      <DeleteButton todo_id={pendingTodo.id} />
    </div>
  ) : (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        defaultChecked={pendingTodo.complete == "completed"}
        id={`checkbox${pendingTodo.id}`}
        onChange={handleCompleteChange} />
      <label className="form-check-label" htmlFor={`checkbox${pendingTodo.id}`} onClick={handleClick} >
        {pendingTodo.title}
      </label>
      <DeleteButton todo_id={pendingTodo.id} />
    </div>
  )
};

export default PendingItems;

