import React from 'react';
import SettingsSidebar from './SettingsSidebar/SettingsSidebar';
import { Outlet } from 'react-router-dom';

import classes from './Settings.module.css';

const Settings = () => {
  return (
    <div className={classes['settings-wrapper']}>
      <SettingsSidebar />
      <div className={classes.content}>
        <a className={classes.breadcrumbs} href="#">
          Organization Settings &gt; Organization Branding &gt; Colors
        </a>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
