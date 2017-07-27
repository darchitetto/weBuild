import {combineReducers} from 'redux';
import jobsReducer from './jobs';
import imagesReducer from './images';
import communitiesReducer from './communities';
import contactsReducer from './contacts'

//TODO look into selectors to handle complex and deeply nested reducers, npm reselect as example
export default combineReducers({job: jobsReducer,
								image:imagesReducer,
								community: communitiesReducer,
								contact: contactsReducer,
								});