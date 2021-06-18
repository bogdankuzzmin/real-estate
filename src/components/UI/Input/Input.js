import classes from './Input.module.scss';

const input = props => {
  const inputClasses = [classes.Input];
  const wrapperClasses = [classes.InputWrapper];

  if (props.disableTopMargin) {
    wrapperClasses.push(classes.DisableTopMargin);
  }

  let customCheckbox;
  if (props.type === 'checkbox') {
    customCheckbox = <span className={classes.CustomCheckbox}>Custom Checkbox</span>;
    inputClasses.push(classes.InputCheckbox);
    wrapperClasses.push(classes.InputCheckboxWrapper);
  }

  return (
    <p className={wrapperClasses.join(' ')}>
      <label htmlFor={props.value}>
        <input className={inputClasses.join(' ')}
               onChange={props.changed} {...props.input} />
        {customCheckbox}

        {props.label}
      </label>
    </p>
  );
};

export default input;
