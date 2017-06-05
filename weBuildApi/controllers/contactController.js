import Contact from '../models/contactModel.js';

module.exports = {
    getContacts : (request, response) =>{
        Contact.find(function(err, contacts) {
            if (err) {
                console.log('error:', err)
                response.send(err);
            }
            console.log('success');
            console.log(contacts);

            response.json(contacts);
        }).sort({createDate: 'desc'});
    },
    saveContact : (request, response) => {
        var contact = new Contact();

        contact.contactType = request.body.contactType;
        contact.firstName = request.body.firstName;
        contact.lastName = request.body.lastName;
        contact.phone = request.body.phone;
        contact.email = request.body.email;
        contact.companyName = request.body.companyName;
        contact.subContractorId = request.body.subContractorId;
        contact.createDate = new Date();

        console.log('body', request.body);

        contact.save(function(err) {
            if (err) {
                response.send(err);
            }

            response.json({ message: 'Contact created!' });
        });
    },
    getContact : (req, res) => {
        //do something
    }
}