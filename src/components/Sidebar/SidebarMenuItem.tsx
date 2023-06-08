import React from 'react';
import { useAppSelector } from '../hooks/hooks';

import { NavLink } from 'react-router-dom';
import classes from './SidebarMenuItem.module.css';
import SvgComponent from '../UI/SvgComponent/SvgComponent';

interface Props {
  link: string;
  title: string;
  svgComponent: React.ReactNode;
}

const setActive = ({ isActive }: any) => (isActive ? classes['active-link'] : '');

const SidebarMenuItem = (props: Props) => {
  const { link, title, svgComponent } = props;
  const { usedPalette } = useAppSelector((state) => state.settings);

  const linkColor = usedPalette ? `${usedPalette.colorPrimary.hex}` : '#9689A6';

  return (
    <li>
      <NavLink to={link} className={setActive} style={{ color: linkColor }}>
        <div className={classes['img-wrapper']}>
          <SvgComponent svgComponent={svgComponent} />
        </div>
        <span className={classes.text}>{title}</span>
      </NavLink>
    </li>
  );
};

export default SidebarMenuItem;
