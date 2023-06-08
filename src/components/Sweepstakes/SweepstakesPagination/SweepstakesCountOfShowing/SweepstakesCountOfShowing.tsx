import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import PaginationColumnWrap from '../../../UI/PaginationCartWrapper/PaginationColumnWrap';

import classes from './SweepstakesCountOfShowing.module.css';

const SweepstakesCountOfShowing = () => {
  const { countOfSweepstakes, countOfShowing } = useAppSelector((state) => state.sweepstakes);
  const countOfShowingSweepstakes = countOfShowing === 'all' ? countOfSweepstakes : countOfShowing;

  return (
    <PaginationColumnWrap>
      <span className={classes['count-text']}>
        {`SHOWING ${countOfSweepstakes} OF ${countOfShowingSweepstakes}`}
      </span>
    </PaginationColumnWrap>
  );
};

export default SweepstakesCountOfShowing;
