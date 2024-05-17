import '../styles/checkbox.css';
import { MdDeleteForever, MdQuestionMark, MdCheck } from 'react-icons/md';

const Checkbox = props => {
  const {
    data: { id, date, description, done, toggleDone, deleteTodo }
  } = props;
  return (
      <label className="Checkbox">
        <p className="Checkbox__date"> Created at: {date} </p>
        <p className="Checkbox__text"> {description}</p>
      <p>Done:</p>
      <div onClick={() => toggleDone(id)}>
	{!done ? (<MdQuestionMark/>) : (	<MdCheck/>)} 
    </div>
        <MdDeleteForever 
            onClick={() => deleteTodo(id)}
			className="icon delete-icon"
		/>
      </label>
  );
};

export default Checkbox;