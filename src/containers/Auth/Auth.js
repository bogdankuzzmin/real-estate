import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import WrapperLayout from '../../hoc/WrapperLayout';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import Spinner from '../../components/UI/Spinner';

import classes from './Auth.module.scss';
import {auth} from '../../store/actions/auth';
import authErrors from '../../utils/authErrors';

const AuthConstant = {
  SIGN_IN: 'Sign In',
  SIGN_UP: 'Sign Up',
};

const initialDataState = {
  email: '',
  password: '',
};

const Auth = props => {
  const dispatch = useDispatch();
  const authHandler = (data, isSignIn) => dispatch(auth(data, isSignIn));

  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);

  const [isSignIn, setIsSignIn] = useState(AuthConstant.SIGN_IN);
  const [inputData, setInputData] = useState(initialDataState);
  const [touched, setTouched] = useState(false);

  const buttonClickHandler = (event) => {
    const buttonText = event.target.innerText;

    if (buttonText === isSignIn) {
      return;
    }

    setIsSignIn(buttonText);
    setInputData(initialDataState);
    setTouched(true);
  };

  const inputChangeHandler = (event) => {
    const inputType = event.target.type;
    setTouched(true);

    if (inputType === 'email') {
      setInputData({
        ...inputData,
        email: event.target.value,
      });
    }

    if (inputType === 'password') {
      setInputData({
        ...inputData,
        password: event.target.value,
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setTouched(false);
    const signIn = isSignIn === AuthConstant.SIGN_IN;

    authHandler(inputData, signIn);
    if (error) {
      setInputData(initialDataState);
    }
  };

  let errorMessage = error && !touched && <p className={classes.ErrorMessage}>{authErrors(error)}</p>;

  return (
    <section>
      <h2 className="visually-hidden">Authentication</h2>

      <WrapperLayout>
        <div className={classes.Auth}>
          <div className={classes.ButtonsContainer}>
            <Button clicked={buttonClickHandler}
                    className={isSignIn === AuthConstant.SIGN_IN ? [classes.ActiveTabButton, classes.TabButton].join(' ') : classes.TabButton}>
              {AuthConstant.SIGN_IN}
            </Button>
            <Button clicked={buttonClickHandler}
                    className={isSignIn === AuthConstant.SIGN_UP ? [classes.ActiveTabButton, classes.TabButton].join(' ') : classes.TabButton}>
              {AuthConstant.SIGN_UP}
            </Button>
          </div>

          {
            loading ? <Spinner /> :
                      <form className={classes.Form} onSubmit={submitHandler}>
                        <div className={classes.InputWrapper}>
                          <Input changed={inputChangeHandler}
                                 disableTopMargin
                                 input={{
                                   type: 'email',
                                   placeholder: 'Email',
                                   value: inputData.email,
                                 }}
                          />
                          <Input changed={inputChangeHandler}
                                 input={{
                                   type: 'password',
                                   placeholder: 'Password',
                                   value: inputData.password,
                                 }}
                          />
                        </div>

                        {errorMessage}

                        <Button type="submit">
                          {isSignIn === AuthConstant.SIGN_IN ? AuthConstant.SIGN_IN : AuthConstant.SIGN_UP}
                        </Button>
                      </form>
          }
        </div>
      </WrapperLayout>
    </section>
  );
};

export default Auth;
