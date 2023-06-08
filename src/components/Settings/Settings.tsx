import React from 'react';
import SettingsSidebar from './SettingsSidebar/SettingsSidebar';
import { Outlet, useLocation } from 'react-router-dom';

import classes from './Settings.module.css';

const Settings = () => {
  const location = useLocation();

  const capitalizeString = (str: string) => {
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
  };

  const breadCrumbs = () => {
    const breadCrumbStart = 'Organization Settings > Organization Branding';
    const initialPage = 'settings';
    const initialPathOfSubTab = 'branding';
    const pathItems = location.pathname.split('/').filter((el) => el !== '');

    if (location.pathname.includes(initialPathOfSubTab)) {
      return breadCrumbStart;
    }

    const breadCrumbItems = pathItems.map((pathItem) => {
      if (pathItem === initialPage) {
        return breadCrumbStart;
      }

      return capitalizeString(pathItem);
    });

    return breadCrumbItems.join(' > ');
  };

  return (
    <div className={classes['settings-wrapper']}>
      <SettingsSidebar />
      <div className={classes.content}>
        <span className={classes.breadcrumbs}>{breadCrumbs()}</span>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
