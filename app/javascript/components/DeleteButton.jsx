import React, { useState } from 'react';

const DeleteButton = ({todo_id}) => {
  const handleClick = (todo_id) => {
    const url = '/todos/delete?id=' + todo_id;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {
        console.log(response);
        window.location.reload(false);
      })
      .catch(() => console.log("An error occurred while adding the todo item"));
  }
  return (
    <span
      className="delete-button"
      onClick={(e) => handleClick(todo_id)}><i className="bi-trash"></i>
    </span>
  )
}

export default DeleteButton;

