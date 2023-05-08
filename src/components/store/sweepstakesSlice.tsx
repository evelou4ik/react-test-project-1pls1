import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { InitialStateInterface, SweepstakeInterface } from '../types/types';

const initialState: InitialStateInterface = {
  sweepstakesArray: [],
  status: 'idle',
  filterStatus: 'all',
  error: null
};

export const fetchSweepstakes = createAsyncThunk('sweepstakes/fetchSweepStakes', async () => {
  const response = await fetch('http://localhost:3001/carts');
  const data = await response.json();

  return data;
});

const sweepstakesSlice = createSlice({
  name: 'sweepstakes',
  initialState,
  reducers: {
    changeFilterStatus: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSweepstakes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchSweepstakes.fulfilled,
        (state, action: PayloadAction<SweepstakeInterface[]>) => {
          state.status = 'succeeded';
          state.sweepstakesArray = [...action.payload];
        }
      )
      .addCase(fetchSweepstakes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { changeFilterStatus } = sweepstakesSlice.actions;

export const selectAllSweepstakes = (state: RootState) => state.sweepstakes.sweepstakesArray;

export default sweepstakesSlice.reducer;

