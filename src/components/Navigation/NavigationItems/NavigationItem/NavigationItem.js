import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from "react-redux";

import classes from './NavigationItem.module.scss';

const NavigationItem = props => {
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  let link = props.link;
  let label = props.label;

  if (props.link === '/sign-in' && isAuthenticated) {
    link = '/logout';
    label = 'Logout';
  }

  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={link}
        className={classes.Link}
        activeClassName={classes.Active}>
        {label}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
