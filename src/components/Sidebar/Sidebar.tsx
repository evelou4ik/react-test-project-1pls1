import React from 'react';

import SidebarMenu from './SidebarMenu';

import classes from './Sidebar.module.css';
import logoImage from '../../assets/logo.svg';

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className={classes.sidebar}>
        <div className={classes['img-wrapper']}>
          <img src={logoImage} alt="" />
        </div>
        <SidebarMenu />
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
