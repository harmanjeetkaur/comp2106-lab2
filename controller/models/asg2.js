//reference mongoose
const mongoose =  require('mongoose');

//create the schema
const Schema = new mongoose.Schema({
        Name: {
            type: String,
            required: 'Make is required'
        },

    Job: {
            type: String,
            required: 'Model is required'
    },

    Age:{
            type: Number,
            required: 'Age is required'
    },

    color:{
            type: String,

    }
});