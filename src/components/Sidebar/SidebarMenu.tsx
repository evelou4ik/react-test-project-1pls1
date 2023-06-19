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
import { getColorFromPaletteOrDefault } from '../helpers/helpers';

const SidebarMenu = () => {
  const { usedPalette } = useAppSelector((state) => state.settings);

  const sidebarListLinks = [
    {
      title: 'Home',
      link: 'home',
      IconComponent: HomeIcon,
      key: uuid()
    },
    {
      title: 'Organizations',
      link: '*',
      IconComponent: OrganizationIcon,
      key: uuid()
    },
    {
      title: 'Donors',
      link: '*',
      IconComponent: DonorsIcon,
      key: uuid()
    },
    {
      title: 'Sweepstakes',
      link: 'sweepstakes',
      IconComponent: SweepstakesIcon,
      key: uuid()
    },
    {
      title: 'Users',
      link: '*',
      IconComponent: UsersIcon,
      key: uuid()
    },
    {
      title: 'Registration',
      link: '*',
      IconComponent: RegistrationIcon,
      key: uuid()
    },
    {
      title: 'Settings',
      link: 'settings/branding',
      IconComponent: SettingsIcon,
      key: uuid()
    },
    {
      title: 'Notifications',
      link: '*',
      IconComponent: NotifyIcon,
      key: uuid()
    }
  ];

  return (
    <nav className={classes['nav-menu']}>
      <ul>
        {sidebarListLinks.map(({ link, title, IconComponent, key }) => {
          return (
            <SidebarMenuItem
              key={key}
              link={link}
              title={title}
              svgComponent={
                <IconComponent
                  className={classes['link-icon']}
                  fill={getColorFromPaletteOrDefault(
                    usedPalette,
                    usedPalette?.colorPrimary.hex,
                    '#303852'
                  )}
                />
              }
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
