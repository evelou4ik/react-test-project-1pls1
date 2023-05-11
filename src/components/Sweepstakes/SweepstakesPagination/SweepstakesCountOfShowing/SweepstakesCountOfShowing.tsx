import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import PaginationColumnWrap from '../../../UI/PaginationCartWrapper/PaginationColumnWrap';

const SweepstakesCountOfShowing = () => {

  const { countOfSweepstakes, countOfShowing } = useAppSelector((state) => state.sweepstakes);

  return (
    <PaginationColumnWrap>
      <span>{`SHOWING ${countOfSweepstakes} OF ${ countOfShowing }`}</span>
    </PaginationColumnWrap>
  );
};

export default SweepstakesCountOfShowing;