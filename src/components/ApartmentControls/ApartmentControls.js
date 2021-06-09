import classes from './ApartmentControls.module.scss';

import ApartmentSorting from "../ApartmentSorting";
import ApartmentFilter from "../ApartmentFilter";

const apartmentControls = props => {
  const apartmentsLength = props.apartments.length;


  return (
    <div className={classes.Controls}>
      <ApartmentFilter disabled={apartmentsLength === 0}/>
      <ApartmentSorting disabled={apartmentsLength === 0}/>
    </div>
  );
};

export default apartmentControls;
