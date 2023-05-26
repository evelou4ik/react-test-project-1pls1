import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import {
  setSaveIsDisabled,
  modifyPaletteName,
  modifyPalettePrimaryColor,
  modifyPaletteSecondaryColor,
  modifyPaletteAccentColor
} from '../../../../store/settingsSlice';
import SinglePalette from './SinglePalette/SinglePalette';
import classes from './CreatePalette.module.css';

const CreatePalette = () => {
  const { palette } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const titleChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(modifyPaletteName(e.target.value));
  };

  useEffect(() => {
    const paletteIsValid = Boolean(
      palette?.name && palette.colorPrimary && palette.colorSecondary && palette.colorAccent
    );

    const identifier = setTimeout(() => {
      if (paletteIsValid) {
        dispatch(setSaveIsDisabled(false));
      } else {
        dispatch(setSaveIsDisabled(true));
      }
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [palette]);

  return (
    <div>
      <div>
        <label className={classes['input-wrap']}>
          <span className={classes['input-text']}>Palette Name</span>
          <input
            className={classes['input-field']}
            type="text"
            placeholder="Placeholder Text"
            onChange={titleChangeHandler}
            defaultValue={palette?.name}
          />
        </label>
        <div>
          <SinglePalette
            type="Primary"
            color={palette?.colorPrimary}
            onModifyColor={(color) => dispatch(modifyPalettePrimaryColor(color))}
          />
          <SinglePalette
            type="Secondary"
            color={palette?.colorSecondary}
            onModifyColor={(color) => dispatch(modifyPaletteSecondaryColor(color))}
          />
          <SinglePalette
            type="Accent"
            color={palette?.colorAccent}
            onModifyColor={(color) => dispatch(modifyPaletteAccentColor(color))}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePalette;
