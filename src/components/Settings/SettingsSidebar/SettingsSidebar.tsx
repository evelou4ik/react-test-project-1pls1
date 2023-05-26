import React from 'react';
import classes from './SettingsSidebar.module.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';

const SettingsSidebar = () => {
  const { usedPalette } = useAppSelector((state) => state.settings);
  const navigate = useNavigate();

  const openSettingHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    e.preventDefault();

    navigate(`/settings/${link}`);
  };

  return (
    <div
      className={classes['sidebar-sec']}
      style={{ backgroundColor: usedPalette ? `${usedPalette.colorSecondary.hex}` : '#F2EEF9' }}>
      <a className={`${classes.link} ${classes['return-link']}`} href="#">
        {' '}
        Back to prev page
      </a>
      <ul className={classes.menu}>
        <li className={classes['menu-item']}>
          <a
            className={`${classes.link}`}
            href="/settings/branding"
            onClick={(e) => openSettingHandler(e, 'branding')}>
            Branding
          </a>
        </li>
        <li className={classes['menu-item']}>
          <a className={`${classes.link}`} href="#">
            Logos
          </a>
        </li>
        <li className={classes['menu-item']}>
          <a
            className={`${classes.link}`}
            href="/settings/colors"
            onClick={(e) => openSettingHandler(e, 'colors')}>
            Colors
          </a>
        </li>
        <li className={classes['menu-item']}>
          <a
            className={`${classes.link}`}
            href="/settings/typography"
            onClick={(e) => openSettingHandler(e, 'typography')}>
            Typography
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SettingsSidebar;
