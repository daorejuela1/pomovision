import '../styles/checkbox.css';

const Checkbox = props => {
  // (A)
  const {
    onChange,
    data: { id, date, description, done }
  } = props;
  return (
      <label className="Checkbox">
        <p className="Checkbox__date"> Created at: {date} </p>
        <p className="Checkbox__text"> {description}</p>
      <p>Done:</p>
        <input
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
      </label>
  );
};

export default Checkbox;