import {useState} from 'react';
import {useDispatch} from 'react-redux';

import WrapperLayout from '../../hoc/WrapperLayout';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

import classes from './Auth.module.scss';
import {auth} from "../../store/actions/auth";

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

  const [isSignIn, setIsSignIn] = useState(AuthConstant.SIGN_IN);
  const [inputData, setInputData] = useState(initialDataState);

  const buttonClickHandler = (event) => {
    const buttonText = event.target.innerText;

    if (buttonText === isSignIn) {
      return;
    }

    setIsSignIn(buttonText);
  };

  const inputChangeHandler = (event) => {
    const inputType = event.target.type;

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
    const signIn = isSignIn === AuthConstant.SIGN_IN;

    authHandler(inputData, signIn);
    setInputData(initialDataState);
  };

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

            <Button type="submit">
              {isSignIn === AuthConstant.SIGN_IN ? AuthConstant.SIGN_IN : AuthConstant.SIGN_UP}
            </Button>
          </form>
        </div>
      </WrapperLayout>
    </section>
  );
};

export default Auth;
