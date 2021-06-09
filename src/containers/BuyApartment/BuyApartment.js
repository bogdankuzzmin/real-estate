import {useEffect} from 'react';
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
  useEffect(() => {
    if (props.apartments.length === 0) {
      props.fetchApartments();
    }
  }, [props.fetchApartments]);

  const clickMoreApartmentsHandler = () => {
    props.increaseApartmentCount();
  };

  if (props.loading) {
    return <Spinner />;
  }

  let moreApartmentsButton = props.apartments.length > props.apartmentCount &&
                             <Button clicked={clickMoreApartmentsHandler}
                                     className={classes.MoreApartmentsButton}>
                               More Apartments
                             </Button>;


  return (
    <section className={classes.BuyApartment}>
      <h2 className="visually-hidden">Buy Apartments</h2>

      <WrapperLayout>
        <ApartmentControls apartments={props.apartments} />
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
    filterType: state.filterType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApartments: () => dispatch(fetchApartments()),
    increaseApartmentCount: () => dispatch(increaseApartmentCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BuyApartment));
