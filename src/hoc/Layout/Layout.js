import {Fragment} from 'react';

import classes from './Layout.module.scss';

import Toolbar from '../../components/Navigation/Toolbar';
import Footer from '../../components/Footer';

const layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <main className={classes.Main}>
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default layout;
