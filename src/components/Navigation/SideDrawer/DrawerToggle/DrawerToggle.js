import classes from './DrawerToggle.module.scss';

const drawerToggle = (props) => {
  return (
    <button className={classes.DrawerToggle} onClick={props.clicked} />
  );
};

export default drawerToggle;
