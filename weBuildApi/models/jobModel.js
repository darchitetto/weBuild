import mongoose from 'mongoose';

let Schema       = mongoose.Schema;
const JobSchema   = new Schema(
    {   name: String,
		contractor: {type: Schema.Types.ObjectId,
			ref: 'Contact'},
        duration: Number,
        category: String,
        startDate: Date,
        jobNumber: Number,
        createDate: Date
    },
    {   collection: 'jobs'});

module.exports = mongoose.model('Job', JobSchema);
