import {combineReducers} from 'redux';
import jobsReducer from './jobs';
import imagesReducer from './images';

//TODO look into selectors to handle complex and deeply nested reducers, npm reselect as example
export default combineReducers({job: jobsReducer, image:imagesReducer });