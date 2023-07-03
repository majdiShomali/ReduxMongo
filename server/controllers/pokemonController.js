const Pokemon = require("../models/pokemon");

const allPokemons = (req, res) => {
    Pokemon.find()
      .then((data) => { 
        res.json(data);
      })
      .catch((error) => {
        errorHandler(error, req, res);
      });
  };

  
  const newPokemon =  async (req, res) => {
    const { name, url } = req.body;
      console.log(name,url)
      const pokemon = new Pokemon({name:name ,url:url});
      const pokemon0 = await pokemon.save();
      res.json(pokemon0);
 
};
  module.exports = {
    allPokemons,
    newPokemon,
  }; 