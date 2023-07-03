import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon, addPokemon } from '../../actions/pokemonActions';
import axios from 'axios';

const Pokemon = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  const [pokemonData, setPokemonData] = useState({ name: '', url: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addPokemon(pokemonData));
      // After successful submission, you can optionally fetch the updated data again
      dispatch(fetchPokemon());
      // Clear the form inputs after successful submission
      setPokemonData({ name: '', url: '' });
    } catch (error) {
      console.error('Failed to add Pokemon:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pokemonData.name}
          onChange={(e) => setPokemonData({ ...pokemonData, name: e.target.value })}
          placeholder="Pokemon Name"
          className="bg-[#dc7171]"
        />
        <input
          type="text"
          value={pokemonData.url}
          onChange={(e) => setPokemonData({ ...pokemonData, url: e.target.value })}
          placeholder="Image URL"
          className="bg-[#71a5dc]"
        />
        <button type="submit">Add Pokemon</button>
      </form>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : data ? (
          <ul>
            {data.map((pokemon) => (
              <div className="flex" key={pokemon.name}>
                <img className="w-10 h-10" src={pokemon.url} alt={pokemon.name} />
                <p>{pokemon.name}</p>
              </div>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );

}

export default Pokemon