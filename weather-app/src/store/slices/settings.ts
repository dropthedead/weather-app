import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
	theme: 'dark' | 'light';
	days: number;
	showRepos: boolean;
	city: string;
}

const initialState: SettingsState = {
	theme: 'light',
	days: 3,
	showRepos: true,
	city: 'Москва',
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		changeTheme: (state) => {
			state.theme = state.theme === 'dark' ? 'light' : 'dark';
		},
		toggleShowRepos: (state) => {
			state.showRepos = !state.showRepos;
		},
		changeDaysAmount: (state, action: PayloadAction<number>) => {
			state.days = action.payload;
		},
		changeCity: (state, action: PayloadAction<string>) => {
			state.city = action.payload;
		},
	},
});

export const { changeTheme, toggleShowRepos, changeDaysAmount, changeCity } =
	settingsSlice.actions;

export default settingsSlice.reducer;
