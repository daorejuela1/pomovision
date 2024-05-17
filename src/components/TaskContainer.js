import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";
import "../styles/taskcontainer.css";

const TaskContainer = () => {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) || []
    });
  
const handleAddItem = (addItem) => {
    setTodos([...todos, addItem]); 
  };

  
  useEffect(() => {
    if(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    }
}, [todos]);

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem('todos'));
		if (todos) {
			setTodos(todos);
		}
	}, []);

  return (
    <div className="TaskContainer">
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TaskContainer;