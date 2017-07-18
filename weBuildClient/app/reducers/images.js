import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

//TODO: why can't we use createReducer()
export default function imageFileStreamId(state = {}, action) {
	switch (action.type) {
		case types.IMAGE_SAVED_STARTED:
			return {
				...state,
				isImageSaveStarted: true,
				isImageSavedSuccess: false,
			};
		case types.IMAGE_SAVED_SUCCESS:
			return {
				...state,
				isImageSaveStarted: false,
				isImageSavedSuccess: true,
				imageFileStreamId: action.imageFileStreamId,
			};
		case types.IMAGE_SAVED_FAILURE:
			return {
				...state,
				isImageSavedError: action.err,
				isLoggingIn: false,
				isLoggedIn: false
			};
			break;
		default:
			return state;
	}
};