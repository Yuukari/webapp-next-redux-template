import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import counterSlice from './slices/counterSlice';

export const makeStore = () => { 
    return configureStore({
        reducer: {
            counter: counterSlice,
        },
        devTools: process.env.NODE_ENV !== 'production'
    });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);