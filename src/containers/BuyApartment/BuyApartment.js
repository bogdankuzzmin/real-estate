import React, {useState, useEffect, useMemo} from 'react';
import {withRouter} from 'react-router';

import classes from './BuyApartment.module.css';

import ListApartment from '../../components/ListApartments';
import WrapperLayout from '../../hoc/WrapperLayout';

const APARTMENT_COUNT_PER_STEP = 6;

const BuyApartment = (props) => {
  const [apartments, setApartments] = useState(null);
  const [apartmentsLength, setApartmentsLength] = useState(0);
  const [apartmentsCount, setApartmentsCount] = useState(APARTMENT_COUNT_PER_STEP);

  useEffect(() => {
    setApartments(props.apartments.slice(0, apartmentsCount));
    setApartmentsLength(props.apartments.length);
  }, [props.apartments, apartmentsCount]);

  const clickApartmentHandler = (id) => {
    props.history.push(props.location.pathname + '/' + id);
  };

  const clickMoreApartmentsHandler = () => {
    setApartmentsCount((prevCount) => {
      return prevCount + APARTMENT_COUNT_PER_STEP;
    });
  };

  let moreApartmentsButton;
  if (apartmentsLength >= apartmentsCount) {
    moreApartmentsButton = (
      <button onClick={clickMoreApartmentsHandler}>More Apartments</button>
    );
  }

  return (
    <section>
      <h2 className="visually-hidden">Buy Apartments</h2>
      <WrapperLayout>
        <ListApartment apartments={apartments} clicked={clickApartmentHandler} />

        {moreApartmentsButton}
      </WrapperLayout>
    </section>
  );
};

export default withRouter(BuyApartment);
