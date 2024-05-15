import React from "react";
import Checkbox from "./Checkbox";
import {AiOutlineDelete} from 'react-icons/ai';
import '../styles/tasklist.css';

const TaskList = props => {
  const { list, setList } = props;

  const onChangeStatus = e => {
    const { name, checked } = e.target;

    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };

  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  const chk = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="TaskList">
      {list.length ? chk : "No tasks"}
      {list.length ? (
        <p>
          <button className="TaskList__delete" onClick={onClickRemoveItem}>
            Clear done tasks <span> <AiOutlineDelete /> </span>
          </button>
        </p>
      ) : null}
      
    </div>
  );
};

export default TaskList;