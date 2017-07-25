import Community from '../models/communityModel.js';
import contacts from '../models/contactModel.js';


module.exports = {
    getCommunities : (request, response) =>{


		Community.find().populate({ path: 'superintendent'})

			.exec(function(err, communities)

			{
				if (err) {
					console.log('error:', err)
					response.send(err);
				}
				response.json(communities);
			});
    },
    saveCommunity : (request, response) => {
        let community = new Community();

		community.name = request.body.name;
		community.township = request.body.township;
		community.county = request.body.county;
		community.superintendent = '596e9753d9ebde9b04f4b3ce'//request.body.superintendent;

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