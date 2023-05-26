import React from 'react';
import { ColumnHeadInterface } from '../../types/types';
import uuid from 'react-uuid';

const ColumnHead = (props: ColumnHeadInterface) => {
  const { className, tableHeadTitle } = props;

  return (
    <thead>
      <tr>
        {tableHeadTitle.map((th) => {
          return (
            <th key={uuid()} className={className}>
              {th}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default ColumnHead;
