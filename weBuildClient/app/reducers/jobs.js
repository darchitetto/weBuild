import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

// export default createReducer({jobs:{}},{
//         [types.SET_SEARCHED_JOBS]:(state,action) => {
//             let newState = {};
//             action.jobs.forEach((job) => {
//                 newState [job._id] = job
//             });
//
//             return {...state,
//                     jobCount: action.jobs.length,
//                     jobs: newState};
//         }
//     }
// );

export default function jobs(state = {}, action) {
	switch (action.type) {
        case types.SET_SEARCHED_JOBS:
			let newState = {};
			action.jobs.forEach((job) => {
				newState [job._id] = job
			});

			return {...state,
				jobCount: action.jobs.length,
				jobs: newState};
		case types.JOB_SAVED_SUCCESSS:
			return {
				...state,
				isJobSaveStarted: false,
				isJobSavedSuccess: true,
			};
		case types.JOB_SAVED_FAILURE:
			return {
				...state,
				isJobSavedError: action.err,
				isLoggingIn: false,
				isLoggedIn: false
			};
			break;
		default:
			return state;
	}
};