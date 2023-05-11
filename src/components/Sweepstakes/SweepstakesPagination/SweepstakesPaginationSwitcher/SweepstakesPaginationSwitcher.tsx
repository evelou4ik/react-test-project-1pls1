import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { updatePaginationPage } from '../../../store/sweepstakesSlice'
import PaginationColumnWrap from '../../../UI/PaginationCartWrapper/PaginationColumnWrap';

const SweepstakesPaginationSwitcher = () => {
  const { currentPage, countOfSweepstakes, countOfShowing } = useAppSelector((state) => state.sweepstakes);
  const dispatch = useAppDispatch();

  const switchNextPage = () => {
    dispatch(updatePaginationPage(currentPage + 1))
  }

  const switchPrevPage = () => {
    if(currentPage >= 2) {
      dispatch(updatePaginationPage(currentPage - 1))
    }
  }

  return (
    <PaginationColumnWrap>
      <button disabled={currentPage === 1} onClick={switchPrevPage}/>
      {currentPage}
      <button disabled={countOfSweepstakes < countOfShowing } onClick={switchNextPage}/>
    </PaginationColumnWrap>
  );
};

export default SweepstakesPaginationSwitcher;