import mongoose from 'mongoose';

let Schema       = mongoose.Schema;
const BuilderSchema   = new Schema(
    {   name: String,
        builderId: [Number]
    },
    {   collection: 'builders'});

module.exports = mongoose.model('Builder', BuilderSchema);