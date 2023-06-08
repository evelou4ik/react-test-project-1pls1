import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';

import classes from './ExampleAssets.module.css';
import classesSettingPage from '../../../UI/SettingPage/SettingPage.module.css';

import { ReactComponent as LikeIcon } from '../../../../assets/like-icon.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/plus-icon.svg';
import { ReactComponent as DownloadIcon } from '../../../../assets/download-icon.svg';
import { ReactComponent as MailIcon } from '../../../../assets/mail-icon.svg';
import { ReactComponent as CalendarIcon } from '../../../../assets/calendar-icon.svg';

import exampleImage from '../../../../assets/example-bg.jpg';

const ExampleAssets = () => {
  const { palette } = useAppSelector((state) => state.settings);

  return (
    <div className={`${classes['example-wrapper']} ${classesSettingPage['content-wrap']}`}>
      <h3 className={classesSettingPage.subtitle}>Example assets</h3>
      <div className={classes['examples-top']}>
        <span
          className={classes.btn}
          style={{
            backgroundColor: `${palette?.colorAccent ? palette.colorAccent.hex : '#315B9C'}`
          }}>
          Donate
        </span>
        <ul className={classes['icons-list']}>
          <li className={classes['icons-item']}>
            <LikeIcon fill={palette?.colorPrimary ? palette.colorPrimary.hex : '#315B9C'} />
          </li>
          <li className={classes['icons-item']}>
            <PlusIcon fill={palette?.colorPrimary ? palette.colorPrimary.hex : '#315B9C'} />
          </li>
          <li className={classes['icons-item']}>
            <DownloadIcon fill={palette?.colorPrimary ? palette.colorPrimary.hex : '#315B9C'} />
          </li>
          <li className={classes['icons-item']}>
            <MailIcon fill={palette?.colorPrimary ? palette.colorPrimary.hex : '#315B9C'} />
          </li>
          <li className={classes['icons-item']}>
            <CalendarIcon fill={palette?.colorPrimary ? palette.colorPrimary.hex : '#315B9C'} />
          </li>
        </ul>
      </div>
      <div className={classes['example-banner']}>
        <img src={exampleImage} alt="example background image" />
        <span
          className={classes['example-banner-text']}
          style={{
            backgroundColor: palette?.colorSecondary
              ? `rgba(${palette.colorSecondary.rgb.r},${palette.colorSecondary.rgb.g}, ${palette.colorSecondary.rgb.b}, 0.8)`
              : 'rgba(49,91,156,0.8)'
          }}>
          Support Troop 15 - Boy Scouts of America
        </span>
      </div>
    </div>
  );
};

export default ExampleAssets;
