import React from 'react';

import classes from './Toolbar.module.css';

import WrapperLayout from '../../../hoc/WrapperLayout';
import NavigationItems from '../NavigationItems';
import Logo from '../../Logo';

const MENU = ['Buy', 'Sell', 'Rent'];
const MENU2 = ['Services', 'Contacts', 'Sign in'];

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <WrapperLayout>
        <nav className={classes.Nav}>
          <NavigationItems list={MENU} />
          <Logo />
          <NavigationItems list={MENU2} marginRight/>
        </nav>
      </WrapperLayout>
    </header>
  );
};

export default toolbar;
