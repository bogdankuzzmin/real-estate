import classes from './WrapperLayout.module.scss';

const wrapperLayout = (props) => {
  const wrapperCLasses = [classes.WrapperLayout, props.className];

  return (
    <div className={wrapperCLasses.join(' ')}>
      {props.children}
    </div>
  );
};

export default wrapperLayout;
