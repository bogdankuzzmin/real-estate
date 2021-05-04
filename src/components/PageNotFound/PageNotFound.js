import classes from './PageNotFound.module.scss';

import WrapperLayout from '../../hoc/WrapperLayout';

const pageNotFound = props => {
  return (
    <WrapperLayout>
      <p className={classes.Text}>Page was not Found.</p>
    </WrapperLayout>
  );
};

export default pageNotFound;
