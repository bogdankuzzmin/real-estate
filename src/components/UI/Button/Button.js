import React from 'react';

import classes from './Button.module.scss';

const button = (props) => {
  const buttonClass = [classes.Button, classes[props.buttonType]];

  if (props.type === 'moreApartmentsButton') {
    buttonClass.push(classes.MoreApartmentsButton);
  }

  return (
    <button
      className={buttonClass.join(' ')}
      onClick={props.clicked}
      disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default button;
