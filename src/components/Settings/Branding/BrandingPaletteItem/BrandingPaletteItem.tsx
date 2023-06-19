import React from 'react';
import classes from './BrandingPaletteItem.module.css';
import { PaletteInterface } from '../../../types/types';

interface Props {
  color: PaletteInterface;
  title: string;
}

const BrandingPaletteItem = (props: Props) => {
  const { color, title } = props;
  return (
    <div className={classes.palette}>
      <span className={classes['palette-color-box']} style={{ backgroundColor: `${color}` }} />
      <span className={classes['palette-color']}>{title}</span>
    </div>
  );
};

export default BrandingPaletteItem;
