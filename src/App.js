import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import Layout from './hoc/Layout';
import MainPage from './containers/MainPage';
import BuyApartment from './containers/BuyApartment';
import ApartmentDetails from './components/ApartmentDetails/ApartmentDetails';

const App = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/buy" render={() => (<BuyApartment /> )} exact />
        <Route path="/buy/asd" render={() => <p>ASD</p>} />
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
