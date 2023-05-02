import React from 'react';
import { NavLink } from "react-router-dom";

import homeIcon from '../../assets/home-icon.svg';
import organizIcon from '../../assets/organiz-icon.svg';
import donorsIcon from '../../assets/donors-icon.svg';
import sweepstakesIcon from '../../assets/sweepstakes-icon.svg';
import usersIcon from '../../assets/users-icon.svg';
import registrIcon from '../../assets/registr-icon.svg';
import settingsIcon from '../../assets/settings-icon.svg';
import notifIcon from '../../assets/notific-icon.svg';

import classes from './SiderbarMenu.module.css'
import sweepstakes from "../../routes/Sweepstakes/Sweepstakes";

const SidebarMenu = () => {
    return (
        <nav className={classes['nav-menu']}>
            <ul>
                <li>
                    <NavLink to={`/home`}>
                        <div className={classes['img-wrapper']}>
                            <img src={homeIcon} alt=""/>
                        </div>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`*`}>
                        <div className={classes['img-wrapper']}>
                            <img src={organizIcon} alt=""/>
                        </div>
                        <span>Organizations</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`*`}>
                        <div className={classes['img-wrapper']}>
                            <img src={donorsIcon} alt=""/>
                        </div>
                        <span>Donors</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`sweepstakes`}>
                        <div className={classes['img-wrapper']}>
                            <img src={sweepstakesIcon} alt=""/>
                        </div>
                        <span>Sweepstakes</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`*`}>
                        <div className={classes['img-wrapper']}>
                            <img src={usersIcon} alt=""/>
                        </div>
                        <span>Users</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`*`}>
                        <div className={classes['img-wrapper']}>
                            <img src={registrIcon} alt=""/>
                        </div>
                        <span>Registration</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`*`}>
                        <div className={classes['img-wrapper']}>
                            <img src={settingsIcon} alt=""/>
                        </div>
                        <span>Settings</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`*`}>
                        <div className={classes['img-wrapper']}>
                            <img src={notifIcon} alt=""/>
                        </div>
                        <span>Notifications</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default SidebarMenu;