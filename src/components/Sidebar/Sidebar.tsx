import React from 'react';

import SidebarMenu from './SidebarMenu';

import classes from './Sidebar.module.css';
import logoImage from '../../assets/logo.svg';

interface Props {
  subSidebarIsActive: boolean;
}

const Sidebar = (props: Props) => {
  const { subSidebarIsActive } = props;
  return (
    <div className={`${classes.sidebar} ${subSidebarIsActive ? classes.abridged : ''}`}>
      <div className={classes['img-wrapper']}>
        <img src={logoImage} alt="" />
      </div>
      <SidebarMenu />
    </div>
  );
};

export default Sidebar;
