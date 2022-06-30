import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WebsiteRenderState } from '../../../types/websiteRenderState';

export const initialState: WebsiteRenderState = {
    complete: false
};

const websiteRenderSlice = createSlice({
    name: 'websiteRender',
    initialState: initialState,
    reducers: {
        setPageLoaded: (state, action: PayloadAction<boolean>) => {
            state.complete = action.payload;
        },
    }
});

export const { setPageLoaded } = websiteRenderSlice.actions;
export default websiteRenderSlice.reducer;
