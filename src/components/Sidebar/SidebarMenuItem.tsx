import React from 'react';
import { useAppSelector } from '../hooks/hooks';

import { NavLink } from 'react-router-dom';
import classes from './SidebarMenuItem.module.css';
import SvgComponent from '../UI/SvgComponent/SvgComponent';
import { getColorFromPaletteOrDefault } from '../helpers/helpers';

interface Props {
  link: string;
  title: string;
  svgComponent: React.ReactNode;
}

const setActive = ({ isActive }: any) => (isActive ? classes['active-link'] : '');

const SidebarMenuItem = (props: Props) => {
  const { link, title, svgComponent } = props;
  const { usedPalette } = useAppSelector((state) => state.settings);

  return (
    <li>
      <NavLink
        to={link}
        className={setActive}
        style={{
          color: getColorFromPaletteOrDefault(usedPalette, usedPalette?.colorPrimary.hex, '#9689A6')
        }}>
        <div className={classes['img-wrapper']}>
          <SvgComponent svgComponent={svgComponent} />
        </div>
        <span className={classes.text}>{title}</span>
      </NavLink>
    </li>
  );
};

export default SidebarMenuItem;
