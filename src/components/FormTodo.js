import React, { useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import "../styles/formtodo.css";

const FormTodo = props => {
  const { handleAddItem } = props; //(C-1)
  const [description, setDescription] = useState(""); // (F-1)
  const handleSubmit = e => {
    e.preventDefault(); // (E)
    // (C-2)
    handleAddItem({
      id: (+new Date()).toString(),
      date: (new Date()).toLocaleTimeString(),
      done: false,
      description
    });
    setDescription(""); // (B)
  };

  return (
    <form className="FormTodo" onSubmit={handleSubmit}>
      <div className="FormTodo__row">
        <div>
          <input
            type="text"
            className="FormTodo__row--text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button
            className="FormTodo__row--button"
            disabled={description ? "" : "disabled"}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;