import React from 'react';

import classes from './ListApartment.module.css';

import ItemApartment from './ItemApartment';

const listApartment = (props) => {
  const {apartments} = props;

  if (apartments === null) {
    return <p>There are no any apartments</p>;
  }

  const apartment = apartments.map(apartment => {
    return <ItemApartment key={apartment.id} apartment={apartment} clicked={props.clicked} clickFavoriteHandler={props.clickFavoriteHandler} />
  });

  return (
    <ul className={classes.ListApartment}>
      {apartment}
    </ul>
  );
};

export default listApartment;
