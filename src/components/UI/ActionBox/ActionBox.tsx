import React from 'react';
import Button from '../Button/Button';
import classes from './ActionBox.module.css';
import { useAppSelector } from '../../hooks/hooks';

interface Props {
  onClick: () => void;
  buttonText: string;
}

const ActionBox = (props: Props) => {
  const { onClick, buttonText } = props;

  return (
    <div>
      <Button className={classes.button} type="button" onClick={onClick}>
        {buttonText}
      </Button>
      <div className={classes.area}></div>
    </div>
  );
};

export default ActionBox;
