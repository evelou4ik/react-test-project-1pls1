import React from 'react';
import uuid from 'react-uuid';

import classes from './SelectHandler.module.css';
import { useAppSelector } from '../../hooks/hooks';
import { TypefacesInterface } from '../../types/types';

interface Props {
  title?: string;
  placeholder?: string;
  options: Array<string>;
  selectOptionHandler: (opt: string) => void;
  value: keyof TypefacesInterface;
}

const SelectHandler = (props: Props) => {
  const { typefaces } = useAppSelector((state) => state.settings);

  return (
    <div className={classes['select-wrap']}>
      <h6 className={classes.title}>{props.title}</h6>
      <select
        className={classes.select}
        onChange={(event) => props.selectOptionHandler(event.target.value)}
        value={typefaces[props.value]}>
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map((opt) => {
          return (
            <option key={uuid()} value={opt}>
              {opt.charAt(0).toUpperCase() + opt.slice(1)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectHandler;
