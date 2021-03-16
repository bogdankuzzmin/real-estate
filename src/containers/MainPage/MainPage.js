import React, {Fragment} from 'react';

import classes from './MainPage.module.css';

const mainPage = (props) => {
  return (
    <Fragment>
      <div className={classes.MainPage}>
        <p>
          When you’re ready for a change, we’re ready to help.
        </p>
      </div>
    </Fragment>
  );
};

export default mainPage;
