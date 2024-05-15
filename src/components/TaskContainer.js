import React, { useState } from "react";
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";
import "../styles/taskcontainer.css";

const TaskContainer = () => {
  const [list, setList] = useState([]); // (B-1)

  const handleAddItem = addItem => {
    setList([...list, addItem]); 
  };

  return (
    <div className="TaskContainer">
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default TaskContainer;