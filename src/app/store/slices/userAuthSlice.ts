import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserAuthState } from '../../../types/userAuthState';

export const initialState: UserAuthState = {
    loading: true,
    authorised: false,
    user: null
};

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: initialState,
    reducers: {
        setUserAuthLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setUserAuth: (state, action: PayloadAction<UserAuthState>) => {
            state.loading = action.payload.loading;
            state.authorised = action.payload.authorised;
            state.user = action.payload.user;
        }
    }
});

export const { setUserAuthLoading, setUserAuth } = userAuthSlice.actions;
export default userAuthSlice.reducer;
