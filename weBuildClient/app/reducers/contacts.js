import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export default createReducer({contacts:{}},{
        [types.SET_SEARCHED_CONTACTS]:(state,action) => {
            let newState = {};
            action.contacts.forEach((contact) => {
                newState [contact._id] = contact
            });

            return {...state,
				contactCount: action.contacts.length,
				contacts: newState};
        }
    }
);
