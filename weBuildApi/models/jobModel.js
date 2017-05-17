import mongoose from 'mongoose';

let Schema       = mongoose.Schema;
const JobSchema   = new Schema(
    {   name: String,
        contractor: String,
        duration: Number,
        category: String,
        startDate: Date,
        jobNumber: Number,

    },
    {   collection: 'jobs'});

module.exports = mongoose.model('Job', JobSchema);
