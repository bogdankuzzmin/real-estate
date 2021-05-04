import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

import classes from './Logo.module.scss';

const logo = props => {
  let linkLogo = <Link to="/">Logo</Link>;

  // if (props.location.pathname === '/') {
  //   linkLogo = <a>Logo</a>;
  // }
  return (
    <div className={classes.Logo}>
      {linkLogo}
    </div>
  );
};

export default withRouter(logo);
