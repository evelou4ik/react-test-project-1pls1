import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { updatePaginationPage } from '../../../store/sweepstakesSlice';
import PaginationColumnWrap from '../../../UI/PaginationCartWrapper/PaginationColumnWrap';

import { ReactComponent as ArrowLeft } from '../../../../assets/arr-left.svg';
import { ReactComponent as ArrowRight } from '../../../../assets/arr-right.svg';

import classes from './SweepstakesPaginationSwitcher.module.css';

const SweepstakesPaginationSwitcher = () => {
  const { currentPage, countOfSweepstakes, countOfShowing } = useAppSelector(
    (state) => state.sweepstakes
  );

  const dispatch = useAppDispatch();

  const switchNextPage = () => {
    dispatch(updatePaginationPage(currentPage + 1));
  };

  const switchPrevPage = () => {
    if (currentPage >= 2) {
      dispatch(updatePaginationPage(currentPage - 1));
    }
  };

  return (
    <PaginationColumnWrap>
      <button
        className={`${classes['btn-switch']} ${classes['btn-prev']}`}
        disabled={currentPage === 1}
        onClick={switchPrevPage}>
        <ArrowLeft />
      </button>
      <span className={classes['current-page']}>{currentPage}</span>
      <button
        className={`${classes['btn-switch']} ${classes['btn-next']}`}
        disabled={countOfSweepstakes < countOfShowing}
        onClick={switchNextPage}>
        <ArrowRight />
      </button>
    </PaginationColumnWrap>
  );
};

export default SweepstakesPaginationSwitcher;
