import {connect} from 'react-redux';

import classes from './ListApartment.module.scss';

import {APARTMENT_COUNT_PER_STEP} from "../../constants/constants";

import ItemApartment from './ItemApartment';

const listApartment = (props) => {
  const {apartments} = props;

  if (apartments === null) {
    return <p>There are no any apartments</p>;
  }

  let animationDelay = 0;
  const apartment = apartments.map((apartment, index) => {
    animationDelay++;

    if (index % APARTMENT_COUNT_PER_STEP === 0) {
      animationDelay = 0;
    }

    return <ItemApartment
              key={apartment.id}
              apartment={apartment}
              clickFavoriteHandler={props.clickFavoriteHandler}
              animationDelay={`0.${animationDelay}s`} />
  });

  return (
    <ul className={classes.ListApartment}>
      {apartment}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    apartmentCount: state.count,
  };
};

export default connect(mapStateToProps)(listApartment);
