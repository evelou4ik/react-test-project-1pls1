import React, { ChangeEvent, useEffect, useState } from 'react';

import { useAppDispatch } from '../../../hooks/hooks';
import { updateCountOfShowing, updatePaginationPage } from '../../../store/sweepstakesSlice';
import uuid from 'react-uuid';

import PaginationColumnWrap from '../../../UI/PaginationCartWrapper/PaginationColumnWrap';

import classes from './SweepstakesPerPage.module.css';

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string | number;
  label: string;
}

const SweepstakesPerPage = () => {
  const dispatch = useAppDispatch();
  const options: OptionProps[] = [
    { value: 10, label: '10' },
    { value: 25, label: '25' },
    { value: 50, label: '50' },
    { value: 'all', label: 'All' }
  ];
  const [countValue, setCountValue] = useState(options[0].value);

  const selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setCountValue(event.target.value);
  };

  useEffect(() => {
    dispatch(updateCountOfShowing(countValue));
    dispatch(updatePaginationPage(1));
  }, [selectChangeHandler]);

  return (
    <PaginationColumnWrap>
      <span className={classes['per-page-text']}>Rows Per Page</span>
      <select
        className={classes['per-page-dropdown']}
        value={countValue}
        onChange={selectChangeHandler}>
        {options.map((option) => (
          <option key={uuid()} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </PaginationColumnWrap>
  );
};

export default SweepstakesPerPage;
