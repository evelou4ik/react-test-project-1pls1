import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import SettingPage from '../../UI/SettingPage/SettingPage';
import Palettes from './Palettes/Palettes';
import ExampleAssets from './ExampleAssets/ExampleAssets';
import {
  addNewPalette,
  setSaveIsDisabled,
  switchCreatePaletteMode,
  modifyExistingPalette,
  switchEditPaletteMode,
  resetOptionsOfCreatedPalette
} from '../../store/settingsSlice';

const Colors = () => {
  const { palettes, isCreatePaletteMode, palette } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const savePalette = () => {
    if (!palette) {
      return;
    }

    if (isCreatePaletteMode && !palettes.some((el) => el.name === palette.name)) {
      dispatch(addNewPalette(palette));
      dispatch(switchCreatePaletteMode(false));
    } else {
      dispatch(modifyExistingPalette(palette));
      dispatch(switchEditPaletteMode(false));
    }

    dispatch(setSaveIsDisabled(true));
    dispatch(resetOptionsOfCreatedPalette());
  };

  return (
    <SettingPage title="Colors" saveChanges={savePalette}>
      <Palettes />
      <ExampleAssets />
    </SettingPage>
  );
};

export default Colors;
