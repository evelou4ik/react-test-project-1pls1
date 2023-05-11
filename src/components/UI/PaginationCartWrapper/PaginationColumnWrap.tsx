import React from 'react';
import classes from './PaginationColumnWrap.module.css';

interface Props {
  children: React.ReactNode;
}

const PaginationColumnWrap = (props: Props) => {
  const { children } = props;
  return (
    <div className={classes['pagination-column']}>
      {children}
    </div>
  );
};

export default PaginationColumnWrap;