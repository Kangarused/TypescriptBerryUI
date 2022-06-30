import { configureStore } from '@reduxjs/toolkit';
import breadcrumbSlice from './slices/breadcrumbSlice';
import layoutSlice from './slices/layoutSlice';
import userAuthSlice from './slices/userAuthSlice';
import websiteRenderSlice from './slices/websiteRenderSlice';

const store = configureStore({
    reducer: {
        layout: layoutSlice,
        websiteRender: websiteRenderSlice,
        breadcrumb: breadcrumbSlice,
        userAuth: userAuthSlice
    }
});
export { store };
