import React from 'react';
import { useAppSelector } from '../../../../hooks/hooks';
import { getColorFromPaletteOrDefault } from '../../../../helpers/helpers';

import SvgComponent from '../../../../UI/SvgComponent/SvgComponent';
import classes from '../ExampleAssets.module.css';
import { ExampleIconsInterface } from '../../../../types/types';

interface Props {
  icons: Array<ExampleIconsInterface>;
}

const ExampleIcons = (props: Props) => {
  const { icons } = props;
  const { palette } = useAppSelector((state) => state.settings);

  return (
    <ul className={classes['icons-list']}>
      {icons.map(({ IconComponent, key }) => {
        return (
          <li key={key} className={classes['icons-item']}>
            <SvgComponent
              svgComponent={
                <IconComponent
                  fill={getColorFromPaletteOrDefault(palette, palette?.colorPrimary, '#315B9C')}
                />
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ExampleIcons;
