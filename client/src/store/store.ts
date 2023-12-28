import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '@store/reducers/language/languageSlice';
import currencyReducer from '@store/reducers/currency/currencySlice';

export const store = configureStore({
  reducer: {
    languages: languageReducer,
    currencies: currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
