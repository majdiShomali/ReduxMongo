import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    return response.data;
  }
);