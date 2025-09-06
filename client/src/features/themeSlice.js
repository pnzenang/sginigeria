import { createSlice } from '@reduxjs/toolkit';

const themes = { lemonade: 'lemonade', night: 'night' };

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.lemonade;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  theme: getThemeFromLocalStorage(),
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { night, lemonade } = themes;
      state.theme = state.theme === night ? lemonade : night;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
