import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export default imageFileStreamId = createReducer({},{
	[types.IMAGE_SAVED_SUCCESS](state,action)
	{
		return {...state, imageFileStreamId: action.imageFileStreamId};
	}
});

