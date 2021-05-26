import classes from './Input.module.scss';

const input = props => {
  const inputClasses = [classes.InputCheckbox];

  let customCheckbox;
  if (props.type === 'checkbox') {
    customCheckbox = <span className={classes.CustomCheckbox}>Custom Checkbox</span>;
  }

  return (
    <p className={classes.InputWrapper}>
      <label htmlFor={props.value}>
        <input className={inputClasses.join(' ')} {...props.input} />
        {customCheckbox}

        {props.label}
      </label>
    </p>
  );
};

export default input;
