import classes from './MainPage.module.scss';

import WrapperLayout from '../../hoc/WrapperLayout';

const mainPage = props => {
  return (
    <section className={classes.MainPage}>
      <h2 className="visually-hidden">Real Estate Agency</h2>
      <WrapperLayout>
        <p>
          When you’re ready for a change, we’re ready to help.
        </p>
      </WrapperLayout>
    </section>
  );
};

export default mainPage;
