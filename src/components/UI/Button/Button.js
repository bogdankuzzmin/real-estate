import classes from './Button.module.scss';

const button = props => {
  const buttonClass = [classes.Button, props.className];

  return (
    <button
      type={props.type}
      data-filter-type={props.dataFilterType}
      className={buttonClass.join(' ')}
      onClick={props.clicked}
      disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default button;
