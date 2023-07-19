import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: filterInitialState,
    reducers: {
        setContactsFilter(state, action) {
            state = action.payload;
        },
    },
});

export const { setContactsFilter } = filtersSlice.actions;
export default filtersSlice.reducer;