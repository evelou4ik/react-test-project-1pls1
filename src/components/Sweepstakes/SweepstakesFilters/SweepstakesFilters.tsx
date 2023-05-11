import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeFilterStatus} from '../../store/sweepstakesSlice';

import Button from '../../UI/Button/Button';
import classes from './SweepstakesFilters.module.css';
import sweepstakesClasses from '../Sweepstakes.module.css'

const SweepstakesFilters = () => {
  const dispatch = useAppDispatch();
  const { sweepstakesArray, filterStatus } = useAppSelector((state) => state.sweepstakes)

  const countOfCompletedSweepstakes = sweepstakesArray.filter((item) => {
    return item.statuses.find((status) => status.toLowerCase() === 'completed');
  });

  const onChangeStatus = (status: string) => {
    dispatch(changeFilterStatus(status));
  };

  return (
    <div className={classes['filters-wrapper']}>
      <span className={` ${sweepstakesClasses.text} ${classes.text} ${classes.title} `}>Filters:</span>
      <Button
        className={`${classes.btn} ${classes.text}  ${filterStatus === 'all' ? classes.active : ''}`}
        type="button"
        onClick={() => onChangeStatus('all')}>
        All
      </Button>
      <Button
        className={`${classes.btn} ${sweepstakesClasses.text} ${classes.text} ${filterStatus === 'active' ? classes.active : ''}`}
        type="button"
        onClick={() => onChangeStatus('active')}>
        Active
      </Button>
      <Button
        className={`${classes.btn} ${sweepstakesClasses.text} ${classes.text} ${filterStatus === 'inactive' ? classes.active : ''}`}
        type="button"
        onClick={() => onChangeStatus('inactive')}>
        Inactive
      </Button>
      <span className={`${sweepstakesClasses.text} ${classes.text}`}>{countOfCompletedSweepstakes.length} Completed</span>
    </div>
  );
};

export default SweepstakesFilters;
