import { useState, useEffect } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import "../styles/formtodo.css";

const FormTodo = (props) => {
    const [todoItem, setTodoItem] = useState('');
    const handleSubmit = event => {
    event.preventDefault(); 

    let newTodoItem ={
      id: (+new Date()).toString(),
      date: (new Date()).toLocaleTimeString(),
      done: false,
      description: todoItem,
    };
    props.handleAddItem(newTodoItem);
    setTodoItem("");
  };

  return (
    <form className="FormTodo" onSubmit={handleSubmit}>
      <div className="FormTodo__row">
        <div>
          <input
            type="text"
            className="FormTodo__row--text"
            value={todoItem}
            maxLength={40}
            onChange={e => setTodoItem(e.target.value)}
          />
          <button
            className="FormTodo__row--button"
            disabled={todoItem ? "" : "disabled"}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;