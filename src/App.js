import React, {useEffect, useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchApartments, fetchApartmentss} from './store/actions/apartment';

import './App.css';

import Layout from './hoc/Layout';
import MainPage from './containers/MainPage';
import Spinner from './components/UI/Spinner';
import BuyApartment from './containers/BuyApartment';
import ApartmentDetails from './components/ApartmentDetails/ApartmentDetails';



const App = props => {
  // const clickFavoriteHandler = (apartment, favorite) => {
  //   localStorage.setItem('favorite@' + apartment.id, favorite);
  //
  //
  //   const index = data.findIndex((apartmentIndex) => apartmentIndex.id === apartment.id);
  //   const newApartment = {
  //     ...apartment,
  //     isFavorite: !apartment.isFavorite,
  //   }
  //
  //   if (index === -1) {
  //     throw new Error(`Can't update non-existent product`);
  //   }
  //
  //   const newData = [
  //     ...data.slice(0, index),
  //     newApartment,
  //     ...data.slice(index + 1),
  //   ];
  //
  //   return setData(newData);
  // };

  if (props.loading) {
    return <Spinner />;
  }

  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/buy" render={() => (<BuyApartment /> )} exact />
        <Route path="/buy/:id"
               render={({match}) => {
                 const {id} = match.params;

                 return <ApartmentDetails apartmentId={id} />;
               }} />
        <Route path="/sell" render={() => (<p>Sell</p>)} />
        <Route path="/rent" render={() => (<p>Rent</p>)} />
        <Route path="/services" render={() => (<p>Services</p>)} />
        <Route path="/contacts" render={() => (<p>Contacts</p>)} />
        <Route path="/sign-in" render={() => (<p>Sign in</p>)} />

        <Route render={() => (<p>Page was not found</p>)} />
      </Switch>
    </Layout>
  );
};
export default App;
