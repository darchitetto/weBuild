import mongoose from 'mongoose';

let Schema       = mongoose.Schema;
const ContactSchema   = new Schema(
    {
        contactType: String,
        firstName: String,
        lastName: String,
        phone: String,
        email: String,
        companyName: String,
        subContractorId: String,
        logoId: Schema.Types.ObjectId,
        createDate: Date
    },
    {   collection: 'contacts'});

module.exports = mongoose.model('Contact', ContactSchema);
