import { createSlice } from '@reduxjs/toolkit';

export const placesSlice = createSlice({
  name: 'places',
  initialState: {
    items: [],
    // Additional state fields
  },
  reducers: {
    // Reducers to update the state
  },
  // Optional: async thunks or additional reducers
});

export const { actions, reducer } = placesSlice;
export default reducer;
