//save to gridFS
//Return an id
//store the id along with the type, name in a table that can be related to other objects (contact, builder)
import express from 'express'
import mongoose from 'mongoose'
import grid from 'gridfs-stream';

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

            //store in document table
            //associate documentid to entity
        });

        writestream.on('error', (Error) =>  {
            console.log('ERROR writing image: ', Error);

        });
    }
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