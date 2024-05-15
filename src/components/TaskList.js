import { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import {AiOutlineDelete} from 'react-icons/ai';
import '../styles/tasklist.css';

const TaskList = (props) => {

    const deleteTodo = (id) => {
        let newTodos = props.todos.filter((todo) => todo.id !== id);
        props.setTodos([...newTodos]);
    };
    
    const toggleDone = (id) => {
		props.todos.find((todo) => {
			if (todo.id === id) {
				todo.done = !todo.done;
			}
			return props.setTodos([...props.todos]);
		});
	};

  return (
    <div className="TaskList">
        {props.todos.map(({ id, date, description, done }) => ( 
            <Checkbox key={id} data={{ id, date, description, done, deleteTodo, toggleDone } } />
    ))}
    </div>
  );
};

export default TaskList;