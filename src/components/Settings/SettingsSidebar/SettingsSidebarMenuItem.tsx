import React from 'react';
import classes from './SettingsSidebarMenuItem.module.css';
import classesMenu from './SettingsSidebar.module.css'
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  link: string;
}

const SettingsSidebarMenuItem = (props: Props) => {
  const { title, link } = props;
  const navigate = useNavigate();

  const navigateHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    e.preventDefault();

    navigate(link);
  };

  const validLinkUrl = link === '#' ? link : `/settings/${link}`;

  return (
    <li className={classes['menu-item']}>
      <a
        className={`${classesMenu.link}`}
        href={validLinkUrl}
        onClick={(e) => navigateHandler(e, link)}>
        {title}
      </a>
    </li>
  );
};

export default SettingsSidebarMenuItem;
