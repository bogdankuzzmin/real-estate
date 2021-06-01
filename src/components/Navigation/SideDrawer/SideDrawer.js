import React, {Fragment} from 'react';

import classes from './SideDrawer.module.scss';
// import NavigationLinks from '../../../constants/navigationList';

import NavigationList from '../NavigationItems';
import Backdrop from '../../UI/Backdrop';
import NavigationItems from "../NavigationItems";
import Logo from "../../Logo/Logo";

const MENU = ['Buy', 'Sell', 'Rent', 'Services', 'Contacts', 'Sign in'];

const sideDrawer = props => {
  let classSideDrawer = [classes.SideDrawer, classes.Close];

  if (props.open) {
    classSideDrawer = [classes.SideDrawer, classes.Open];
  }

  const sideDrawerCloseHandler = (event) => {
    if (event.target.closest('a')) {
      props.close();
    }
  };

  return (
    <Fragment>
      <div className={classSideDrawer.join(' ')} onClick={sideDrawerCloseHandler}>
        <nav>
          <Logo className={classes.SideDrawerLogo}  />
          <NavigationItems list={MENU} />
        </nav>
      </div>

      <Backdrop show={props.open} clicked={props.close} />
    </Fragment>
  );
};

export default sideDrawer;
