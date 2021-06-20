import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem';

const navigationItems = props => {
  if (!props.list) {
    return null;
  }

  const navigationClasses = [classes.NavigationItems];

  if (props.marginRight) {
    navigationClasses.push(classes.MarginRight);
  }

  if (props.hide) {
    navigationClasses.push(classes.Hide);
  }

  const list = props.list.map((item, index) => {
    return <NavigationItem
              key={item + index}
              link={`/${item}`.toLowerCase().replace(/\s/g , "-")}
              label={item} />;
  });

  return (
    <ul className={navigationClasses.join(' ')}>
      {list}
    </ul>
  );
};

navigationItems.propTypes = {
  list: PropTypes.array
};

export default navigationItems;
