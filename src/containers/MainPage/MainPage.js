import classes from './MainPage.module.scss';

import WrapperLayout from '../../hoc/WrapperLayout';

const mainPage = props => {
  return (
    <section>
      <h2 className="visually-hidden">Real Estate Agency</h2>
      <WrapperLayout>
        <p>
          Main page
        </p>
      </WrapperLayout>
    </section>
  );
};

export default mainPage;
