import {Fragment} from 'react';

import classes from './ApartmentControls.module.scss';

import ApartmentSorting from "../ApartmentSorting";
import ApartmentFilter from "../ApartmentFilter";

const apartmentControls = props => {
  return (
    <div className={classes.Controls}>
      <ApartmentSorting />
      <ApartmentFilter />
    </div>
  );
};

export default apartmentControls;
