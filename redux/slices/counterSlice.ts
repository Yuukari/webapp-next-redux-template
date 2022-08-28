import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';

export const name = 'counter';

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name,
    initialState,

    reducers: {
        increment: (state: Draft<typeof initialState>) => {
            state.value++;
        },
        decrement: (state: Draft<typeof initialState>) => {
            if (state.value > 0)
                state.value--;
        },
        setValue: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState.value>) => {
            state.value = action.payload;
        }
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload[name],
            };

            // state.value = action.payload.counter.value;
        }
    }
})

export const { increment, decrement, setValue } = counterSlice.actions;

export const getCounterState = (state: { counter: CounterState }) => state.counter;
export default counterSlice.reducer;