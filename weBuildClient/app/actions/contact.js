import * as types from './types'

export function addContact (contact){
    console.log('ACTION addContact', contact)
    saveContact(contact);

    return {
        type: types.CONTACT_ADDED,
    }
}

const saveContact = (contact) => {
    fetch(types.BASE_URL + 'contact', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contactType: contact.contactType,
            firstName: contact.firstName,
            lastName: contact.lastName,
            phone: contact.phone,
            email: contact.email,
            companyName: contact.companyName,
            subContractorId: contact.subContractorId,
        })
    }).then((response) => response.json())
        .then((responseData) => {
        console.log('saveContactResponse', responseData)
    });
};