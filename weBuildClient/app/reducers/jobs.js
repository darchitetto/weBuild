import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchJobs = createReducer({},{
        [types.SET_SEARCHED_JOBS](state,action){
            let newState = {};

            action.jobs.forEach((job) => {
                newState [job.jobNumber] = job
            });

            return newState;
        }
    }
);

export const jobCount = createReducer(0,{
    [types.SET_SEARCHED_JOBS](state,action) {  //this line says listen for this type of action
        return action.jobs.length;
    }
})