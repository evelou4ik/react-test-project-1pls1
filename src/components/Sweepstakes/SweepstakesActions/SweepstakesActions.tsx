import React from 'react';

import SweepstakesFilters from '../SweepstakesFilters/SweepstakesFilters';

import classes from './SweepstakesActions.module.css';
import SweepstakesPagination from '../SweepstakesPagination/SweepstakesPagination';

const SweepstakesActions = () => {
  return (
    <div className={classes['table-top']}>
      <SweepstakesFilters />
      <SweepstakesPagination />
    </div>
  );
};

export default SweepstakesActions;
