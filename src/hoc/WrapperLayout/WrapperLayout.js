import classes from './WrapperLayout.module.scss';

const wrapperLayout = (props) => {
  return (
    <div className={classes.WrapperLayout}>
      {props.children}
    </div>
  );
};

export default wrapperLayout;
