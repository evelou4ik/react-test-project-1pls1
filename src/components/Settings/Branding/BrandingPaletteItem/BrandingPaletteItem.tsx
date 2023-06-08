import React from 'react';
import classes from '../Branding.module.css';
import { PaletteInterface } from '../../../types/types';

interface Props {
  color: PaletteInterface;
  title: string;
}

const BrandingPaletteItem = (props: Props) => {
  const { color, title } = props;
  return (
    <div className={classes.palette}>
      <span
        className={classes['palette-color-box']}
        style={{ backgroundColor: `${333}` }}
      />
      <span className={classes['palette-color']}>{title}</span>
    </div>
  );
};

export default BrandingPaletteItem;
