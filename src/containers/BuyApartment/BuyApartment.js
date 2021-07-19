import {Fragment, useEffect} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import classes from './BuyApartment.module.scss';

import {fetchApartments, increaseApartmentCount} from '../../store/actions/apartment';
import WrapperLayout from '../../hoc/WrapperLayout';

import Spinner from '../../components/UI/Spinner';
import Button from '../../components/UI/Button';
import ListApartment from '../../components/ListApartments';
import ApartmentControls from '../../components/ApartmentControls';

const BuyApartment = (props) => {
  const {apartments, fetchApartments} = props;

  useEffect(() => {
    if (apartments.length === 0) {
      fetchApartments();
    }
  }, [fetchApartments]);

  const clickMoreApartmentsHandler = () => {
    props.increaseApartmentCount();
  };

  let moreApartmentsButton = props.apartments.length > props.apartmentCount &&
                             <Button clicked={clickMoreApartmentsHandler}
                                     className={classes.MoreApartmentsButton}>
                               More Apartments
                             </Button>;

  let apartmentsList = (
    <Fragment>
      <ListApartment apartments={props.apartments.slice(0, props.apartmentCount)} />
      {moreApartmentsButton}
    </Fragment>
  );


  return (
    <section className={classes.BuyApartment}>
      <h2 className="visually-hidden">Buy Apartments</h2>

      <WrapperLayout>
        <ApartmentControls apartments={props.apartments} />
        {props.loading ? <Spinner /> : apartmentsList}
      </WrapperLayout>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    apartments: state.apartments.apartments,
    loading: state.apartments.loading,
    error: state.apartments.error,
    apartmentCount: state.apartments.count,
    sortType: state.apartments.sortType,
    filterType: state.apartments.filterType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApartments: () => dispatch(fetchApartments()),
    increaseApartmentCount: () => dispatch(increaseApartmentCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BuyApartment));
