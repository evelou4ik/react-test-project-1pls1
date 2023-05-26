import React from 'react';
import classes from './TabWrapper.module.css';

interface Props {
  children: React.ReactNode;
}

const TabWrapper = (props: Props) => {
  const { children } = props;
  return <div className={classes.wrapper}>{children}</div>;
};

export default TabWrapper;
