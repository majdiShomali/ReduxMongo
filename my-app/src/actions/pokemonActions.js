import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const response = await axios.get("http://localhost:5000/api/pokemons");
    return response.data;
  }
);

export const addPokemon = createAsyncThunk(
  "pokemon/addPokemon",
  async (pokemonData) => {
    // Perform the necessary logic to add the new Pokemon to the API or database
    const response = await axios.post(
      "http://localhost:5000/api/pokemons",
      pokemonData
    );
    return response.data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); // Add the new Pokemon to the data array
      })
      .addCase(addPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
