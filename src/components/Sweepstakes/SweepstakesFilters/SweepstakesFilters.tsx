import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeFilterStatus, updatePaginationPage } from '../../store/sweepstakesSlice';

import Button from '../../UI/Button/Button';
import classes from './SweepstakesFilters.module.css';
import sweepstakesClasses from '../Sweepstakes.module.css';
import uuid from 'react-uuid';

const SweepstakesFilters = () => {
  const dispatch = useAppDispatch();
  const { sweepstakesArray, filterStatus } = useAppSelector((state) => state.sweepstakes);

  const countOfCompletedSweepstakes = sweepstakesArray.filter((item) => {
    return item.statuses.find((status) => status.toLowerCase() === 'completed');
  });

  const onChangeStatus = (status: string) => {
    dispatch(changeFilterStatus(status));
    dispatch(updatePaginationPage(1));
  };

  const filters = [
    {
      title: 'all',
      key: uuid()
    },
    {
      title: 'active',
      key: uuid()
    },
    {
      title: 'inactive',
      key: uuid()
    }
  ];

  const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div className={classes.filters}>
      <span className={` ${sweepstakesClasses.text} ${classes.text} ${classes.title} `}>
        Filters:
      </span>
      <ul className={classes['filters-wrapper']}>
        {filters.map(({ title, key }) => {
          return (
            <li key={key}>
              <Button
                className={`${classes.btn} ${sweepstakesClasses.text} ${classes.text}  ${
                  filterStatus === title ? classes.active : ''
                }`}
                type="button"
                onClick={() => onChangeStatus(title)}>
                {capitalizeFirstLetter(title)}
              </Button>
            </li>
          );
        })}
        <span className={`${sweepstakesClasses.text} ${classes.text}`}>
          {countOfCompletedSweepstakes.length} Completed
        </span>
      </ul>
    </div>
  );
};

export default SweepstakesFilters;
