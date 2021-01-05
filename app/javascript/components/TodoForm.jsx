import React, { useState } from 'react';

const TodoForm = () => {
  const [adding, setAdding] = useState(false);
  const [todoItem, setTodoItem] = useState({});

  const handleClick = () => {
    console.log('click');
    setAdding(true);
  }

  const handleChange = (event) => {
    console.log('1111', event.target.value);
    setTodoItem({
      title: event.target.value,
      complete: 'uncompleted'
    });
  }

  const handleBlur = () => {
    setAdding(false);
  }

  const handleAddSubmit = (body) => {
    console.log('222', typeof(todoItem));
    if (checkNullObj(todoItem)) {
      alert('This is not todo title');
    } else {
      const url = "/todos/add";
      const token = document.querySelector('meta[name="csrf-token"]').content;

      fetch(url, {
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(response  => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => {
          console.log(response);
          window.location.reload(false);
        })
        .catch(() => console.log("An error occurred while adding the todo item"))
    }
    setAdding(false);
  }

  const checkNullObj = (obj) => {
    return Object.keys(obj).length === 0
  }

  return adding ? (
    <div className="form-check adding">
      <input
        type="text"
        className="form-control-plaintext"
        id="addingTodoItem"
        onChange={handleChange}
        autoFocus
        onBlur={handleBlur}
      />
      <button
        className="btn btn-primary"
        onClick={(e) => handleAddSubmit(todoItem)}>
        ADD
      </button>
    </div>
  ) : (
    <div className="form-check-add">
      <input
        type="text"
        className="form-control-plaintext"
        id="addingTodoItem"
        onClick={handleClick}/>
      <button
        className="btn btn-primary"
        onClick={(e) => handleAddSubmit(todoItem)}>
        ADD
      </button>
    </div>
  )
};

export default TodoForm;

