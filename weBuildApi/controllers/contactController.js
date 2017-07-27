import Contact from '../models/contactModel.js';

module.exports = {
    getContacts : (request, response) =>{
        //TODO: Is this the best way to route by contactType
        let where = {};

		if (request.params.contactType){
		    where = {contactType: request.params.contactType};
        }

        Contact.find(where).sort({createDate: 'desc'})
            .exec(function(err, contacts) {
            if (err) {
                console.log('error:', err)
                response.send(err);
            }
            console.log(contacts)
            response.json(contacts);
        });
    },
    saveContact : (request, response) => {
        let contact = new Contact();

        contact.contactType = request.body.contactType;
        contact.firstName = request.body.firstName;
        contact.lastName = request.body.lastName;
        contact.phone = request.body.phone;
        contact.email = request.body.email;
        contact.companyName = request.body.companyName;
        contact.subContractorId = request.body.subContractorId;
		contact.logoId = request.body.imageFileStreamId;
        contact.createDate = new Date();

        console.log('body', request.body);

        contact.save(function(err) {
            if (err) {
                response.send(err);
            }

            response.json({ message: 'Contact created!' });
        });
    },
    getContact : (request, response) => {

    }
}