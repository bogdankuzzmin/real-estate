import React from 'react';
import classes from './WrapperLayout.module.css';

const wrapperLayout = (props) => {
  return (
    <div className={classes.WrapperLayout}>
      {props.children}
    </div>
  );
};

export default wrapperLayout;
