import React from 'react';
import classes from './ExampleBanner.module.css';
import exampleImage from '../../../../../assets/example-bg.jpg';
import { useAppSelector } from '../../../../hooks/hooks';

const ExampleBanner = () => {
  const { palette } = useAppSelector((state) => state.settings);

  const exampleTextBackgroundColor = palette?.colorSecondary
    ? `rgba(${palette.colorSecondary.rgb.r},${palette.colorSecondary.rgb.g}, ${palette.colorSecondary.rgb.b}, 0.8)`
    : 'rgba(49,91,156,0.8)';

  return (
    <div className={classes['example-banner']}>
      <img src={exampleImage} alt="example background image" />
      <span
        className={classes['example-banner-text']}
        style={{ backgroundColor: exampleTextBackgroundColor }}>
        Support Troop 15 - Boy Scouts of America
      </span>
    </div>
  );
};

export default ExampleBanner;
