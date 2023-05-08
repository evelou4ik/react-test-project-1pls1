import { configureStore } from '@reduxjs/toolkit';
import sweepstakesReducer from './sweepstakesSlice';

export const store = configureStore({
  reducer: {
    sweepstakes: sweepstakesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
