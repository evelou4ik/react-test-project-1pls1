import React from 'react';
import ExampleTypography from './ExampleTypography/ExampleTypography';

import classes from './ExampleTypographies.module.css';
import classesSettingPage from '../../../UI/SettingPage/SettingPage.module.css';
import '../../../../fonts/fonts.css';

const ExampleTypographies = () => {
  return (
    <div className={`${classesSettingPage['content-wrap']}`}>
      <h3 className={classesSettingPage.subtitle}>Example type pairings</h3>
      <ExampleTypography includeHeading={true} includeSubHeading={true} />
      <span className={classes.separator}></span>
      <ExampleTypography includeHeading={true} includeSubHeading={false} />
      <span className={classes.separator}></span>
      <ExampleTypography includeHeading={false} includeSubHeading={true} />
    </div>
  );
};

export default ExampleTypographies;
