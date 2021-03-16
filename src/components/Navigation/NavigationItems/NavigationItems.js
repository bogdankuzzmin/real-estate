import React from 'react';
import PropTypes from 'prop-types';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem';

const navigationItems = props => {
  if (!props.list) {
    return null;
  }

  const NavigationClasses = [classes.NavigationItems];

  if (props.marginRight) {
    NavigationClasses.push(classes.MarginRight);
  }

  const list = props.list.map((item, index) => {
    return <NavigationItem
              key={item + index}
              link={`/${item}`.toLowerCase().replace(/\s/g , "-")}>
                {item}
           </NavigationItem>;
  });

  return (
    <ul className={NavigationClasses.join(' ')}>
      {list}
    </ul>
  );
};

navigationItems.propTypes = {
  list: PropTypes.array
};

export default navigationItems;
