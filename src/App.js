import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import './App.css';

import Layout from './hoc/Layout';
import MainPage from './containers/MainPage';
import BuyApartment from './containers/BuyApartment';
import ApartmentDetails from './components/ApartmentDetails/ApartmentDetails';

import apartmentsMockData from './mocs/apartments';

const apartments = new Array(20).fill().map(apartmentsMockData);
console.log(apartments);
const app = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/buy" render={() => (<BuyApartment apartments={apartments} />)} exact />
        <Route path="/buy/:id"
               render={({match}) => {
                 const {id} = match.params;

                 const apartment = apartments.find(apartment => apartment.id === Number(id));

                 if (apartment) {
                   return <ApartmentDetails apartment={apartment} apartmentId={id} />;
                 }
                  return <p>It seems that apartment was deleted :(</p>
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

export default app;
