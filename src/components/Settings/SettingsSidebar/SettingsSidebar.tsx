import React from 'react';
import classes from './SettingsSidebar.module.css';
import { useAppSelector } from '../../hooks/hooks';
import SettingsSidebarMenuItem from './SettingsSidebarMenuItem';
import uuid from 'react-uuid';
import ButtonBackToPrevPage from '../../UI/ButtonBackToPrevPage/ButtonBackToPrevPage';
import { getColorFromPaletteOrDefault } from '../../helpers/helpers';

const SettingsSidebar = () => {
  const { usedPalette } = useAppSelector((state) => state.settings);

  const sidebarListLinks = [
    {
      title: 'Branding',
      link: 'branding',
      key: uuid()
    },
    {
      title: 'Logos',
      link: '#',
      key: uuid()
    },
    {
      title: 'Colors',
      link: 'colors',
      key: uuid()
    },
    {
      title: 'Typography',
      link: 'typography',
      key: uuid()
    }
  ];

  return (
    <div
      className={classes['sidebar-sec']}
      style={{
        backgroundColor: getColorFromPaletteOrDefault(
          usedPalette,
          usedPalette?.colorSecondary.hex,
          '#F2EEF9'
        )
      }}>
      <ButtonBackToPrevPage title="Back to prev page" />
      <ul className={classes.menu}>
        {sidebarListLinks.map(({ title, link, key }) => {
          return <SettingsSidebarMenuItem key={key} title={title} link={link} />;
        })}
      </ul>
    </div>
  );
};

export default SettingsSidebar;
