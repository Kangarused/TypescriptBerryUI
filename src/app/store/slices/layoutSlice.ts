import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LayoutState } from '../../../types/layoutState';

export const initialState: LayoutState = {
    fontFamily: 'Roboto, sans-serif',
    borderRadius: 8,
    isDarkTheme: false,
    drawerOpen: true
};

const layoutSlice = createSlice({
    name: 'layout',
    initialState: initialState,
    reducers: {
        setMenu: (state, action: PayloadAction<boolean>) => {
            state.drawerOpen = action.payload;
        },
        setDarkThemeState: (state, action: PayloadAction<boolean>) => {
            state.isDarkTheme = action.payload;
        }
    }
});

export const { setMenu, setDarkThemeState } = layoutSlice.actions;
export default layoutSlice.reducer;
