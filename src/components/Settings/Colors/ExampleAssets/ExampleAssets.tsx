import React from 'react';
import { ExampleIconsInterface } from '../../../types/types';
import uuid from 'react-uuid';

import ExampleBanner from './ExampleBanner/ExampleBanner';
import ExampleIcons from './ExampleIcons/ExampleIcons';

import classes from './ExampleAssets.module.css';
import classesSettingPage from '../../../UI/SettingPage/SettingPage.module.css';

import { ReactComponent as LikeIcon } from '../../../../assets/like-icon.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/plus-icon.svg';
import { ReactComponent as DownloadIcon } from '../../../../assets/download-icon.svg';
import { ReactComponent as MailIcon } from '../../../../assets/mail-icon.svg';
import { ReactComponent as CalendarIcon } from '../../../../assets/calendar-icon.svg';
import ExampleButton from './ExampleButton/ExampleButton';

const ExampleAssets = () => {
  const exampleListSvg: Array<ExampleIconsInterface> = [
    {
      IconComponent: LikeIcon,
      key: uuid()
    },
    {
      IconComponent: PlusIcon,
      key: uuid()
    },
    {
      IconComponent: DownloadIcon,
      key: uuid()
    },
    {
      IconComponent: MailIcon,
      key: uuid()
    },
    {
      IconComponent: CalendarIcon,
      key: uuid()
    }
  ];

  return (
    <div className={`${classes['example-wrapper']} ${classesSettingPage['content-wrap']}`}>
      <h3 className={classesSettingPage.subtitle}>Example assets</h3>
      <div className={classes['examples-top']}>
        <ExampleButton title="Donate" />
        <ExampleIcons icons={exampleListSvg} />
      </div>
      <ExampleBanner />
    </div>
  );
};

export default ExampleAssets;
