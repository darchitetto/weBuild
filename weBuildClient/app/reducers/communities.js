import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export default createReducer({communities:{}},{
        [types.SET_SEARCHED_COMMUNITIES]:(state,action) => {
            let newState = {};
            action.communities.forEach((community) => {
                newState [community._id] = community
            });

            return {...state,
                    communityCount: action.communities.length,
                    communities: newState};
        }
    }
);
