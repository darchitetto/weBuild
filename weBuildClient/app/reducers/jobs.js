import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export default createReducer({jobs:{}},{
        [types.SET_SEARCHED_JOBS]:(state,action) => {
            let newState = {};
            action.jobs.forEach((job) => {
                newState [job._id] = job
            });

            return {...state,
                    jobCount: action.jobs.length,
                    jobs: newState};
        }
    }
);
