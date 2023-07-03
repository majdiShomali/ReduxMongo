import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemon } from '../actions/pokemonActions';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    loading: false,
    data: null,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
