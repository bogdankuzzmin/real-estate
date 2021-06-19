const authErrors = (errorMessage) => {
  switch (errorMessage) {
    case 'EMAIL_NOT_FOUND': return 'Email was not found!';
    case 'EMAIL_EXISTS': return 'Email is not available!';
    case 'INVALID_PASSWORD': return 'Password is wrong!';

    default: return errorMessage;
  }
};

export default authErrors;
