import Community from '../models/communityModel.js';

module.exports = {
    getCommunities : (request, response) =>{
		Community.find(function(err, communities) {
            if (err) {
                console.log('error:', err)
                response.send(err);
            }
            console.log('success')
            console.log(communities)
            response.json(communities);
        });
    },
    saveCommunity : (request, response) => {
        let community = new Community();

		community.name = request.body.name;
		community.township = request.body.township;
		community.county = request.body.county;
		community.superintendent = request.body.superintendent;

        console.log('body', request.body)

        community.save(function(err) {
            if (err) {
                response.send(err);
            }

            response.json({ message: 'Community created!' });
        });
    },
    getCommunity : (req, res) => {
        //do something
    }
};