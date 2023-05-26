import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaletteInterface } from '../types/types';

interface InitialStateInterface {
  palettes: Array<PaletteInterface>;
  isCreatePaletteMode: boolean;
  isEditPaletteMode: boolean;
  saveIsDisabled: boolean;
  usedPalette: PaletteInterface | null;
  palette: PaletteInterface | null;
}

const initialState: InitialStateInterface = {
  palettes: [],
  isCreatePaletteMode: false,
  isEditPaletteMode: false,
  saveIsDisabled: true,
  usedPalette: null,
  palette: null
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    switchCreatePaletteMode: (state, action: PayloadAction<boolean>) => {
      state.isCreatePaletteMode = action.payload;
    },
    switchEditPaletteMode: (state, action: PayloadAction<boolean>) => {
      state.isEditPaletteMode = action.payload;
    },
    switchUsedPalette: (state, action: PayloadAction<PaletteInterface>) => {
      state.usedPalette = action.payload;
    },
    createNewPalette: (state, action: PayloadAction<string>) => {
      state.palette = {
        id: action.payload,
        name: '',
        colorPrimary: null,
        colorSecondary: null,
        colorAccent: null
      };
    },
    modifyPaletteName: (state, action: PayloadAction<string>) => {
      if (state.palette) {
        state.palette.name = action.payload;
      }
    },
    modifyPalettePrimaryColor: (state, action: PayloadAction<any>) => {
      if (state.palette) {
        state.palette.colorPrimary = action.payload;
      }
    },
    modifyPaletteSecondaryColor: (state, action: PayloadAction<any>) => {
      if (state.palette) {
        state.palette.colorSecondary = action.payload;
      }
    },
    modifyPaletteAccentColor: (state, action: PayloadAction<any>) => {
      if (state.palette) {
        state.palette.colorAccent = action.payload;
      }
    },
    addNewPalette: (state, action: PayloadAction<PaletteInterface>) => {
      state.palettes.push(action.payload);
    },
    setSaveIsDisabled: (state, action: PayloadAction<boolean>) => {
      state.saveIsDisabled = action.payload;
    },
    updatePalette: (state, action: PayloadAction<any>) => {
      state.palette = { ...action.payload };
    },
    modifyExistingPalette: (state, action: PayloadAction<any>) => {
      const palette = state.palettes.find((el) => el.id == action.payload.id);

      if (palette) {
        palette.name = action.payload.name;
        palette.colorPrimary = action.payload.colorPrimary;
        palette.colorSecondary = action.payload.colorSecondary;
        palette.colorAccent = action.payload.colorAccent;
      }
    },
    resetOptionsOfCreatedPalette: (state) => {
      state.palette = null;
    }
  }
});

export const {
  switchCreatePaletteMode,
  switchEditPaletteMode,
  createNewPalette,
  addNewPalette,
  updatePalette,
  modifyExistingPalette,
  setSaveIsDisabled,
  switchUsedPalette,
  modifyPaletteName,
  modifyPalettePrimaryColor,
  modifyPaletteSecondaryColor,
  modifyPaletteAccentColor,
  resetOptionsOfCreatedPalette
} = settingsSlice.actions;

export default settingsSlice.reducer;
