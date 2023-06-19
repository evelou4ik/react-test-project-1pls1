import React from 'react';
import { useAppSelector } from '../../../../hooks/hooks';
import { getColorFromPaletteOrDefault } from '../../../../helpers/helpers';

import classes from '../ExampleAssets.module.css';

interface Props {
  title: string;
}

const ExampleButton = ({ title }: Props) => {
  const { palette } = useAppSelector((state) => state.settings);

  return (
    <span
      className={classes.btn}
      style={{
        backgroundColor: `${getColorFromPaletteOrDefault(palette, palette?.colorAccent, '#315B9C')}`
      }}>
      {title}
    </span>
  );
};

export default ExampleButton;
