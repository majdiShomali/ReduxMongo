import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../actions/UserActions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    data: null,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
