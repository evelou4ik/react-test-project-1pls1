import React from 'react';
import uuid from 'react-uuid';
import { useAppSelector } from '../hooks/hooks';
import SidebarMenuItem from './SidebarMenuItem';

import classes from './SiderbarMenu.module.css';

import { ReactComponent as HomeIcon } from '../../assets/home-icon.svg';
import { ReactComponent as OrganizationIcon } from '../../assets/organiz-icon.svg';
import { ReactComponent as DonorsIcon } from '../../assets/donors-icon.svg';
import { ReactComponent as SweepstakesIcon } from '../../assets/sweepstakes-icon.svg';
import { ReactComponent as UsersIcon } from '../../assets/users-icon.svg';
import { ReactComponent as RegistrationIcon } from '../../assets/registr-icon.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings-icon.svg';
import { ReactComponent as NotifyIcon } from '../../assets/notific-icon.svg';

const SidebarMenu = () => {
  const { usedPalette } = useAppSelector((state) => state.settings);

  const svgFill = usedPalette ? `${usedPalette.colorPrimary.hex}` : '#303852';
  const sidebarListLinks = [
    {
      title: 'Home',
      link: 'home',
      IconComponent: HomeIcon
    },
    {
      title: 'Organizations',
      link: '*',
      IconComponent: OrganizationIcon
    },
    {
      title: 'Donors',
      link: '*',
      IconComponent: DonorsIcon
    },
    {
      title: 'Sweepstakes',
      link: 'sweepstakes',
      IconComponent: SweepstakesIcon
    },
    {
      title: 'Users',
      link: '*',
      IconComponent: UsersIcon
    },
    {
      title: 'Registration',
      link: '*',
      IconComponent: RegistrationIcon
    },
    {
      title: 'Settings',
      link: 'settings/branding',
      IconComponent: SettingsIcon
    },
    {
      title: 'Notifications',
      link: '*',
      IconComponent: NotifyIcon
    }
  ];

  return (
    <nav className={classes['nav-menu']}>
      <ul>
        {sidebarListLinks.map(({ link, title, IconComponent }) => {
          return (
            <SidebarMenuItem
              key={uuid()}
              link={link}
              title={title}
              svgComponent={<IconComponent className={classes['link-icon']} fill={svgFill} />}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
