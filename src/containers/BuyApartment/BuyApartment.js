import {useEffect} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import classes from './BuyApartment.module.scss';

import {fetchApartments, increaseApartmentCount} from '../../store/actions/apartment';
import WrapperLayout from '../../hoc/WrapperLayout';

import Spinner from '../../components/UI/Spinner';
import Button from '../../components/UI/Button';
import ListApartment from '../../components/ListApartments';
import ApartmentSorting from "../../components/ApartmentSorting";

const BuyApartment = (props) => {
  useEffect(() => {
    if (props.apartments.length === 0) {
      props.fetchApartments();
    }

  }, [props.fetchApartments, props.apartments, props.sortType]);

  const clickMoreApartmentsHandler = () => {
    props.increaseApartmentCount();
  };

  if (props.loading) {
    return <Spinner />;
  }

  let moreApartmentsButton = props.apartments.length > props.apartmentCount &&
                             <Button clicked={clickMoreApartmentsHandler}
                                     buttonType="MoreApartmentsButton">
                               More Apartments
                             </Button>


  return (
    <section className={classes.BuyApartment}>
      <h2 className="visually-hidden">Buy Apartments</h2>

      <WrapperLayout>
        <ApartmentSorting />
        <ListApartment apartments={props.apartments.slice(0, props.apartmentCount)} />

        {moreApartmentsButton}
      </WrapperLayout>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    apartments: state.apartments,
    loading: state.loading,
    error: state.error,
    apartmentCount: state.count,
    sortType: state.sortType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApartments: () => dispatch(fetchApartments()),
    increaseApartmentCount: () => dispatch(increaseApartmentCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BuyApartment));
