import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { CartsRequest, InitialStateInterface, SweepstakeInterface } from '../types/types';
import {correctFormatOfDate} from '../helpers/helpers';

const initialState: InitialStateInterface = {
  sweepstakesArray: [],
  filterStatus: 'all',
  countOfSweepstakes: 0,
  countOfShowing: 0,
  currentPage: 1,
  status: 'idle',
  error: null
};

interface cartsRequest {
  status: string;
  page: number;
  limit: number | string;
}

export const fetchSweepstakes = createAsyncThunk('sweepstakes/fetchSweepStakes', async (request: cartsRequest) => {
  const { status, page, limit } = request;

  const statusValidation = status !== 'all' ? `?status=${status}&` : '';
  const limitValidation = limit !== 'all' ? `?_page=${page}&_limit=${limit}` : '';

  const response = await fetch(`http://localhost:3001/carts${statusValidation}${limitValidation}`);
  const data = await response.json();

  return data;
});

const sweepstakesSlice = createSlice({
  name: 'sweepstakes',
  initialState,
  reducers: {
    changeFilterStatus: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
    updateCountOfShowing: (state, action) => {
      state.countOfShowing = action.payload;
    },
    updatePaginationPage: (state, action) => {
      state.currentPage = action.payload;
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
          state.countOfSweepstakes = action.payload.length;

          state.sweepstakesArray = action.payload.map(el => {
            return {
              ...el,
              start_date: correctFormatOfDate(el.start_date),
              end_date: correctFormatOfDate(el.end_date),
              statuses: el.statuses.map((status) => {
                const updateStatus = status.split('_').join(' ');

                return updateStatus[0].toUpperCase() + updateStatus.slice(1);
              })
            }
          })
        }
      )
      .addCase(fetchSweepstakes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { changeFilterStatus, updateCountOfShowing, updatePaginationPage } = sweepstakesSlice.actions;

export default sweepstakesSlice.reducer;

