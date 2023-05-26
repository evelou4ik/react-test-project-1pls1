import React from 'react';
import { PaletteInterface } from '../../../../types/types';
import { useAppDispatch } from '../../../../hooks/hooks';
import { switchUsedPalette } from '../../../../store/settingsSlice';

import classes from './PalettesItem.module.css';

import { ReactComponent as ArrowIcon } from '../../../../../assets/arr-dropdown-icon.svg';

interface Props {
  paletteItem: PaletteInterface;
  onEditPalette: (palette: PaletteInterface) => void;
}

const PalettesItem = (props: Props) => {
  const { paletteItem, onEditPalette } = props;
  const dispatch = useAppDispatch();

  const changeUsedPalette = () => {
    dispatch(switchUsedPalette(paletteItem));
  };

  return (
    <div className={classes['palette-item-wrap']}>
      <span className={classes.name} onClick={changeUsedPalette}>
        <span className={classes.point}></span>
        <span>{paletteItem.name}</span>
      </span>
      <button className={classes.expand} onClick={() => onEditPalette(paletteItem)}>
        <ArrowIcon fill="purple" />
      </button>
    </div>
  );
};

export default PalettesItem;
