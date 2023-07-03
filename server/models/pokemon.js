const mongoose = require('mongoose');


const Schema = mongoose.Schema;

//1- Create a new schema 
const pokemonSchema = new Schema({
     
    name: {
        type : String,
        required : true
    },
    url: {
        type : String,
        required : true
    },
},

{timestamps : true}

);
    
    

    // 2- export the model with the schema
    module.exports = mongoose.model('pokemon',pokemonSchema);




    