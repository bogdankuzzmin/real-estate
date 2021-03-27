import React, {Fragment} from 'react';

import classes from './Layout.module.scss';

import Toolbar from '../../components/Navigation/Toolbar';

const layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <main className={classes.Main}>
        {props.children}
      </main>
      <footer className={classes.Footer}>
        <p>It will be the best SPA I've ever built!</p>
      </footer>
    </Fragment>
  );
};

export default layout;
