import React from 'react';

import SweepstakesFilters from '../SweepstakesFilters/SweepstakesFilters';
import SweepstakesPagination from '../SweepstakesPagination/SweepstakesPagination';

import classes from './SweepstakesActions.module.css';

const SweepstakesActions = () => {
  return (
    <div className={classes['table-top']}>
      <SweepstakesFilters />
      <SweepstakesPagination />
    </div>
  );
};

export default SweepstakesActions;
