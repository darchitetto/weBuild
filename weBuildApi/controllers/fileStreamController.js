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
    getStream : (request, response) =>{
        FileStream.findOne({_id: request.query.fileStreamId})
            .exec(function(err, file) {
                console.log('filetreamId', request.query.fileStreamId)
                console.log('fsFileId',file.fsFileId);

                const gridfs = app.get('gridfs');

                response.set('Content-Type', file.contentType);
                response.set('Content-Disposition', 'inline; filename="' + 'photo.jpeg' + '"');

                var readstream = gridfs.createReadStream({
                    _id: file.fsFileId
                });

                readstream.on("error", function(err) {
                    console.log("Got error while processing stream " + err.message);
                    response.end();
                });

                readstream.pipe(response);
            });
    },
    writeStream: async (request,response) => {
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
            saveFileStream(request, file._id).then(fileStream => {
                console.log('ImageId: ', file._id)
                console.log('fileStream: ', fileStream)

                response.json(
                    {
                        fileStreamId: fileStream.fileStreamId,
                        fileId: file._id
                    }
                )
            });
        });

        writestream.on('error', (Error) =>  {
            console.log('ERROR writing image: ', Error);

        });
    }
}

async function saveFileStream (request, fileId)  {
    let fileStream = new FileStream();

    fileStream.fsFileId = fileId;
    fileStream.type = request.body.fileType;
    fileStream.fileName = request.body.fileName;
    fileStream.createDate = new Date();

     try {
        let res = await fileStream.save();
        console.log('saveFileStream', res);
        return {fileStreamId: res._id};
     }
     catch(err){
        console.log('Error: saveFileStream', err);
        return err;
     }
}