import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './SiderbarMenu.module.css';

import {ReactComponent as HomeIcon} from '../../assets/home-icon.svg';
import {ReactComponent as OrganizationIcon} from '../../assets/organiz-icon.svg';
import {ReactComponent as DonorsIcon} from '../../assets/donors-icon.svg';
import {ReactComponent as SweepstakesIcon} from '../../assets/sweepstakes-icon.svg';
import {ReactComponent as UsersIcon} from '../../assets/users-icon.svg';
import {ReactComponent as RegistrationIcon} from '../../assets/registr-icon.svg';
import {ReactComponent as SettingsIcon} from '../../assets/settings-icon.svg';
import {ReactComponent as NotifyIcon} from '../../assets/notific-icon.svg';



const setActive = ({isActive}: any) => isActive ? classes['active-link'] : '';

const SidebarMenu = () => {
  return (
    <nav className={classes['nav-menu']}>
      <ul>
        <li>
          <NavLink to={`/home`} className={setActive}>
            <div className={classes['img-wrapper']}>
              <HomeIcon className={classes['link-icon']}/>
            </div>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`*`} className={setActive}>
            <div className={classes['img-wrapper']}>
              <OrganizationIcon className={classes['link-icon']}/>
            </div>
            <span>Organizations</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`*`} className={setActive}>
            <div className={classes['img-wrapper']}>
              <DonorsIcon className={classes['link-icon']}/>
            </div>
            <span>Donors</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`sweepstakes`} className={setActive}>
            <div className={classes['img-wrapper']}>
              <SweepstakesIcon className={classes['link-icon']}/>
            </div>
            <span>Sweepstakes</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`*`} className={setActive}>
            <div className={classes['img-wrapper']}>
              <UsersIcon className={classes['link-icon']}/>
            </div>
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`*`} className={setActive}>
            <div className={classes['img-wrapper']}>
              <RegistrationIcon className={classes['link-icon']}/>
            </div>
            <span>Registration</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`*`} className={setActive}>
            <div className={classes['img-wrapper']}>
              <SettingsIcon className={classes['link-icon']}/>
            </div>
            <span>Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`*`} className={setActive}>
            <div className={classes['img-wrapper']}>
              <NotifyIcon className={classes['link-icon']}/>
            </div>
            <span>Notifications</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarMenu;
