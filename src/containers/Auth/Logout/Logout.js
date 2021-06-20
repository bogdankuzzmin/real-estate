import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Redirect} from "react-router";

import {logout} from '../../../store/actions/auth';

const Logout = props => {
  const dispatch = useDispatch();

  const logoutHandler = () => dispatch(logout());

  useEffect(() => {
    logoutHandler();
  }, [logoutHandler]);

  return <Redirect to="/" />;
};

export default Logout;
