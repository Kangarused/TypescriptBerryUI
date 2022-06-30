import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BreadcrumbState, BreadcrumbStatePayload } from '../../../types/breadcrumbState';

export const initialState: BreadcrumbState = {};

const breadcrumbSlice = createSlice({
    name: 'breadcrumb',
    initialState: initialState,
    reducers: {
        addBreadcrumbItem: (state, action: PayloadAction<BreadcrumbStatePayload>) => {
            state[action.payload.match] = action.payload.replaceWith;
        },
        removeBreadcrumbItem: (state, action) => {
            state[action.payload.match] = null;
        },
    }
});

export const { addBreadcrumbItem, removeBreadcrumbItem } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
