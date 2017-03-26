import Builder from '../models/builderModel.js';

module.exports = {
    getBuilders : (request, response) =>{
        Builder.find(function(err, builders) {
            if (err) {
                console.log('error:', err)
                response.send(err);
            }
            console.log('success')
            console.log(builders)
            response.json(builders);
        });
    },
    saveBuilders : (request, response) => {
        var builder = new Builder();      // create a new instance of the builder model

        builder.name = request.body.name;  // set the builder name (comes from the request)
        builder.builderId = request.body.builderId;  // set the builder name (comes from the request)
        console.log('body', request.body)

        builder.save(function(err) {
            if (err) {
                response.send(err);
            }

            response.json({ message: 'Builder created!' });
        });
    },
    getBuilder : (req, res) => {
        //do something
    }
}