import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { SweepstakeInterface } from '../types/types';
import { correctFormatOfDate } from '../helpers/helpers';

interface InitialStateInterface {
  sweepstakesArray: SweepstakeInterface[] | [];
  filterStatus: string;
  countOfSweepstakes: number;
  countOfShowing: number | string;
  currentPage: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

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

const filterSweepstakes = (status: string, sweepstakes: Array<SweepstakeInterface>) => {
  if (status !== 'all') {
    return sweepstakes.filter((sweepstake) => sweepstake.status === status);
  } else {
    return sweepstakes;
  }
};

export const fetchSweepstakes = createAsyncThunk(
  'sweepstakes/fetchSweepStakes',
  async (request: cartsRequest) => {
    const { status, page, limit } = request;

    const statusValidation = status !== 'all' ? `status=${status}` : '';
    const limitValidation = limit !== 'all' ? `?_page=${page}&_limit=${limit}&` : '';

    const response = await fetch(
      `http://localhost:3001/carts${limitValidation}${statusValidation}`
    );

    const data = await response.json();

    return data;
  }
);

const sweepstakesSlice = createSlice({
  name: 'sweepstakes',
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<SweepstakeInterface>) => {
      state.sweepstakesArray = [...state.sweepstakesArray, action.payload];
    },
    changeFilterStatus: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
    updateCountOfShowing: (state, action) => {
      state.countOfShowing = action.payload;
    },
    updatePaginationPage: (state, action) => {
      state.currentPage = action.payload;
    },
    updateSelectedPost: (state, action) => {
      const { status, id } = action.payload;
      const existingCart = state.sweepstakesArray.find((cart) => cart.id === id);

      if (existingCart) {
        existingCart.status = status;

        state.sweepstakesArray = filterSweepstakes(state.filterStatus, [...state.sweepstakesArray]);

        const updateCart = async () => {
          await fetch(`http://localhost:3001/carts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ status: status }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          });
        };

        updateCart();
      }
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
          const formatNumberWithCommas = (number: string) => {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          };

          state.status = 'succeeded';
          state.countOfSweepstakes = action.payload.length;

          state.sweepstakesArray = action.payload.map((el) => {
            return {
              ...el,
              raised: formatNumberWithCommas(el.raised),
              start_date: correctFormatOfDate(el.start_date),
              end_date: correctFormatOfDate(el.end_date),
              statuses: el.statuses.map((status) => {
                const updateStatus = status.split('_').join(' ');

                return updateStatus[0].toUpperCase() + updateStatus.slice(1);
              })
            };
          });
        }
      )
      .addCase(fetchSweepstakes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const {
  changeFilterStatus,
  updateCountOfShowing,
  updatePaginationPage,
  updateSelectedPost
} = sweepstakesSlice.actions;

export default sweepstakesSlice.reducer;
