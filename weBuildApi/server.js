import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;        // set our port

// Define routes
app.use('/api', routes);

//connect to mongoose
mongoose.connect('mongodb://127.0.0.1/weBuild');

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('weBuild.services is up!! ' + port);


//const url = 'mongodb://<darcitetto>:<n3bulous>@ds137220.mlab.com:37220/weBuild.services';
// const url = 'mongodb://localhost:27017'
// let db;
//
// MongoClient.connect(url, (err, database) => {
//     if (err) return console.log(err)
//     db = database
//     app.listen(3000, () => {
//         console.log('listening on 3000');
//         console.log(db);
//     })
// })