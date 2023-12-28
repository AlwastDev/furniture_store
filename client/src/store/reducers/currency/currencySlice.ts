import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyEnum } from '@static/enums';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currency: CurrencyEnum[CurrencyEnum.USD],
  },
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
