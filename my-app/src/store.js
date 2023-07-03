import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/pokemonReducer';
import userReducer from './reducers/userReducer';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    user: userReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
