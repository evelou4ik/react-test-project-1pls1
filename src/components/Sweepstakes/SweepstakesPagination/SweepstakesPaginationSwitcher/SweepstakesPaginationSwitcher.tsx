import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { updatePaginationPage } from '../../../store/sweepstakesSlice';

import PaginationColumnWrap from '../../../UI/PaginationCartWrapper/PaginationColumnWrap';
import Button from '../../../UI/Button/Button';

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
      <Button
        type={'button'}
        onClick={switchPrevPage}
        className={`${classes['btn-switch']} ${classes['btn-prev']}`}
        isDisabled={currentPage === 1}>
        <ArrowLeft />
      </Button>
      <span className={classes['current-page']}>{currentPage}</span>
      <Button
        type={'button'}
        onClick={switchNextPage}
        className={`${classes['btn-switch']} ${classes['btn-next']}`}
        isDisabled={countOfSweepstakes < countOfShowing}>
        <ArrowRight />
      </Button>
    </PaginationColumnWrap>
  );
};

export default SweepstakesPaginationSwitcher;
