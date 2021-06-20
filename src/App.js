import {useEffect, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Route, Switch, Redirect} from 'react-router-dom';

import './App.scss';

import Layout from './hoc/Layout';
import MainPage from './containers/MainPage';
import SellApartment from './containers/SellApartment';
import Services from './containers/Services';
import Contacts from './containers/Contacts';
import Auth from './containers/Auth';
import Logout from "./containers/Auth/Logout";
import PageNotFound from './components/PageNotFound';
import BuyApartment from './containers/BuyApartment';
import RentApartment from './containers/RentApartment';
import ApartmentDetails from './components/ApartmentDetails/ApartmentDetails';

import {authCheckState} from "./store/actions/auth";

const App = props => {
  const dispatch = useDispatch();
  const authCheckHandler = useCallback(() => dispatch(authCheckState()), [dispatch]);

  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => {
    authCheckHandler();
  }, [authCheckHandler]);

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
        <Route path="/sell" component={SellApartment} />
        <Route path="/rent" component={RentApartment} />
        <Route path="/services" component={Services} />
        <Route path="/contacts" component={Contacts} />

        {!isAuthenticated ? <Route path="/sign-in" component={Auth} /> : <Route path="/logout" component={Logout} />}
        {isAuthenticated && <Route path="/sign-in" render={() => <Redirect to="/" />} />}

        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
