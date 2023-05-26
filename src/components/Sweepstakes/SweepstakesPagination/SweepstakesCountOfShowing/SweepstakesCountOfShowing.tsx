import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import PaginationColumnWrap from '../../../UI/PaginationCartWrapper/PaginationColumnWrap';

import classes from './SweepstakesCountOfShowing.module.css';

const SweepstakesCountOfShowing = () => {
  const { countOfSweepstakes, countOfShowing } = useAppSelector((state) => state.sweepstakes);

  return (
    <PaginationColumnWrap>
      <span className={classes['count-text']}>{`SHOWING ${countOfSweepstakes} OF ${
        countOfShowing === 'all' ? countOfSweepstakes : countOfShowing
      }`}</span>
    </PaginationColumnWrap>
  );
};

export default SweepstakesCountOfShowing;
