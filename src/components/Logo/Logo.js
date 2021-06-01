import {Link} from 'react-router-dom';

import classes from './Logo.module.scss';

const logo = props => {
  const logoClasses = [classes.Logo, props.className];

  return (
    <div className={logoClasses.join(' ')}>
      <Link to="/">Logo</Link>
    </div>
  );
};

export default logo;
