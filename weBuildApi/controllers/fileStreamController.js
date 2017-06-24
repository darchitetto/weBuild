import express from 'express'
import mongoose from 'mongoose'
import grid from 'gridfs-stream';
import FileStream from '../models/fileStreamModel.js';

const app = express();
const connection = mongoose.connection;
grid.mongo = mongoose.mongo;

connection.once('open', function () {
    const gfs = grid(connection.db);
    app.set('gridfs', gfs);
});


module.exports = {
    writeStream: (request,response) =>{
        console.log('write stream')

        const gridfs = app.get('gridfs');

        const writestream = gridfs.createWriteStream({
            filename: 'photo.jpg', //Come up with a naming pattern
        });

        let b64string = request.body.image.substr(23); //Remove the 23 character name
        let buf = new Buffer(b64string, 'base64'); //convert to binary
        writestream.end(buf);

        //When closing the stream, read it back out and send the ID in the response
        writestream.on('close', (file) => {
            console.log('ImageId: ', file._id);
            const ret = saveFileStream(request, file._id)
            return {fileId: file._id}
        });

        writestream.on('error', (Error) =>  {
            console.log('ERROR writing image: ', Error);

        });
    }
}

const saveFileStream = (request, fileId) => {
    var fileStream = new FileStream();

    fileStream.fsFileId = fileId;
    fileStream.type = request.body.fileType;
    fileStream.fileName = request.body.fileName;
    fileStream.createDate = new Date();

    fileStream.save(function(err, fileStream) {
        if (err) {
            return err;
        }
    });

    return { message: 'File created!' };
}

//READ STREAM

// let buffer = 0;
//
// // read file, buffering data as we go
// let readStream = gridfs.createReadStream({ filename: "photo.jpg" });
//
// readStream.on("data", function (chunk) {
//     buffer += chunk;
// });
//
// // dump contents to console when complete
// readStream.on("end", function () {
//     console.log("contents of file:\n\n", buffer);
// });