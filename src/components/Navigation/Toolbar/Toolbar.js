import React from 'react';

import classes from './Toolbar.module.scss';

import WrapperLayout from '../../../hoc/WrapperLayout';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import Logo from '../../Logo';

const MENU = ['Buy', 'Sell', 'Rent'];
const MENU2 = ['Services', 'Contacts', 'Sign in'];

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <WrapperLayout>
        <nav className={classes.Nav}>
          <DrawerToggle clicked={props.drawerToggle}/>
          <NavigationItems list={MENU} hide />
          <Logo />
          <NavigationItems list={MENU2} marginRight hide />
        </nav>
      </WrapperLayout>
    </header>
  );
};

export default toolbar;
