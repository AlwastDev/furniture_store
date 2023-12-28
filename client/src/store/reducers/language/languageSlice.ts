import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageEnum } from '@static/enums';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: LanguageEnum[LanguageEnum.English],
  },
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
