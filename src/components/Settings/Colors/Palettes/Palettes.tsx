import React from 'react';
import uuid from 'react-uuid';
import { PaletteInterface } from '../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import {
  switchCreatePaletteMode,
  switchEditPaletteMode,
  createNewPalette,
  updatePalette
} from '../../../store/settingsSlice';

import PalettesItem from './PalettesItem/PalettesItem';
import ActionBox from '../../../UI/ActionBox/ActionBox';
import CreatePalette from './CreatePalette/CreatePalette';

import classes from './Palettes.module.css';
import classesSettingPage from '../../../UI/SettingPage/SettingPage.module.css';

import { ReactComponent as TooltipIcon } from '../../../../assets/tooltip-icon.svg';

const Palettes = () => {
  const { isCreatePaletteMode, isEditPaletteMode, palettes } = useAppSelector(
    (state) => state.settings
  );

  const dispatch = useAppDispatch();

  const editPaletteHandler = (palette: PaletteInterface) => {
    dispatch(updatePalette(palette));
    dispatch(switchEditPaletteMode(true));
  };

  return (
    <div className={classes['palette-content']}>
      <div className={classesSettingPage['title-wrap']}>
        <h3 className={classesSettingPage.subtitle}>Your palette(s)</h3>
        <span className={classesSettingPage['tooltip-icon']}>
          <TooltipIcon />
          <i className={classesSettingPage['tooltip-content']}>Colors</i>
        </span>
      </div>
      <p className={classes.text}>
        Colors make your organization unique. Your brand’s palette is made up of 3 colors: Primary,
        Secondary, and Accent.
      </p>

      {isCreatePaletteMode || isEditPaletteMode ? (
        <CreatePalette />
      ) : (
        <React.Fragment>
          {palettes.length > 0 && (
            <ul className={classes['palette-list']}>
              {palettes.map((el) => {
                return (
                  <li className={classes['palette-item']} key={el.id}>
                    <PalettesItem paletteItem={el} onEditPalette={editPaletteHandler} />
                  </li>
                );
              })}
            </ul>
          )}
          <ActionBox
            onClick={() => {
              dispatch(switchCreatePaletteMode(true));
              dispatch(createNewPalette(uuid()));
            }}
            buttonText="Create a New Palette"
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Palettes;
