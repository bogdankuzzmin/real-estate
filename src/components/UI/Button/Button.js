import React from 'react';

import classes from './Button.module.scss';
import heart from '../../../assets/icons/heart.svg'

const button = (props) => {
  return (
    <button
      className={[classes.Button, classes[props.buttonType]].join(' ')}
      onClick={props.clicked}
      disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default button;
