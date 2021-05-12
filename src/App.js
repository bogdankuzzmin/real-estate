import {Route, Switch} from 'react-router-dom';

import './App.scss';

import Layout from './hoc/Layout';
import MainPage from './containers/MainPage';
import SellApartment from './containers/SellApartment';
import Services from './containers/Services';
import Contacts from './containers/Contacts';
import Auth from './containers/Auth';
import PageNotFound from './components/PageNotFound';
import BuyApartment from './containers/BuyApartment';
import RentApartment from './containers/RentApartment';
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
        <Route path="/sell" component={SellApartment} />
        <Route path="/rent" component={RentApartment} />
        <Route path="/services" component={Services} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/sign-in" component={Auth} />

        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
