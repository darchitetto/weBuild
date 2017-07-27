import mongoose from 'mongoose';

let Schema       = mongoose.Schema;
const CommunitySchema   = new Schema(
    {   name: String,
        township: String,
        county: String,
		numberOfLots: Number,
        superintendent: {type: Schema.Types.ObjectId,
			            ref: 'Contact'}
    },
    {   collection: 'communities'});

module.exports = mongoose.model('Community', CommunitySchema);