import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FileStreamSchema   = new Schema(
    {   fsFileId: Schema.Types.ObjectId,
        //fsFileId: {type: mongoose.Schema.Types.ObjectId, ref: 'fs.files'},
        type: String, //jpg, pdf, etc
        fileName: String,
        createDate: Date
    },
    {   collection: 'fileStream'});

module.exports = mongoose.model('FileStream', FileStreamSchema);