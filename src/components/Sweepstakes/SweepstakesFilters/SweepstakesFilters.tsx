import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeFilterStatus, selectAllSweepstakes } from '../../store/sweepstakesSlice';

import Button from '../../UI/Button/Button';
import classes from './SweepstakesFilters.module.css';

const SweepstakesFilters = () => {
  const dispatch = useAppDispatch();
  const listOfSweepstakes = useAppSelector(selectAllSweepstakes);
  const sweepstakeFilterStatus = useAppSelector((state) => state.sweepstakes.filterStatus);

  const countOfCompletedSweepstakes = listOfSweepstakes.filter((item) => {
    return item.statuses.find((status) => status.toLowerCase() === 'completed');
  });

  const onChangeStatus = (status: string) => {
    dispatch(changeFilterStatus(status));
  };

  return (
    <div className={classes['filters-wrapper']}>
      <span className={`${classes.text} ${classes.title} `}>Filters:</span>
      <Button
        className={`${classes.btn} ${classes.text}  ${sweepstakeFilterStatus === 'all' ? classes.active : ''}`}
        type="button"
        onClick={() => onChangeStatus('all')}>
        All
      </Button>
      <Button
        className={`${classes.btn} ${classes.text} ${sweepstakeFilterStatus === 'active' ? classes.active : ''}`}
        type="button"
        onClick={() => onChangeStatus('active')}>
        Active
      </Button>
      <Button
        className={`${classes.btn} ${classes.text} ${sweepstakeFilterStatus === 'inactive' ? classes.active : ''}`}
        type="button"
        onClick={() => onChangeStatus('inactive')}>
        Inactive
      </Button>
      <span>{countOfCompletedSweepstakes.length} Completed</span>
    </div>
  );
};

export default SweepstakesFilters;
