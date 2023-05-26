import { configureStore } from '@reduxjs/toolkit';
import sweepstakesReducer from './sweepstakesSlice';
import settingsReducer from './settingsSlice';

export const store = configureStore({
  reducer: {
    sweepstakes: sweepstakesReducer,
    settings: settingsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
