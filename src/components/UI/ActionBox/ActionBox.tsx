import React from 'react';

import classes from './ActionBox.module.css';

interface Props {
  classes?: string;
}

const ActionBox = (props: Props) => {
  return <div className={`${classes.area} ${props.classes ? classes[props.classes] : ''}`}></div>;
};

export default ActionBox;
