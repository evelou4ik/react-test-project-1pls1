import React from 'react';

import classes from './SweepstakesPagination.module.css';
import SweepstakesCountOfShowing from './SweepstakesCountOfShowing/SweepstakesCountOfShowing';
import SweepstakesPerPage from './SweepstakesPerPage/SweepstakesPerPage';
import SweepstakesPaginationSwitcher from './SweepstakesPaginationSwitcher/SweepstakesPaginationSwitcher';

const SweepstakesPagination = () => {
  return (
    <div className={classes['pagination-wrap']}>
      <SweepstakesCountOfShowing />
      <SweepstakesPerPage />
      <SweepstakesPaginationSwitcher />
    </div>
  );
};

export default SweepstakesPagination;
