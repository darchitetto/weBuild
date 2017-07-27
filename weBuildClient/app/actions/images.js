import * as types from './types';
import * as fileStreamTypes from '../lib/fileStreamTypes';
import * as config from '../lib/config';

export function addImage (base64Image, fileName){
//middleware => return a function rather than object which is the default. By returning a function, the promise will be resolved
	return (dispatch, getState) => {
		//dispatch(imageSaveStarted());
		saveImage(base64Image, fileName, dispatch);
	}
}

const saveImage = (base64Image, fileName, dispatch) => {
	return fetch(config.BASE_URL + 'fileStream', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			image: base64Image,
			fileType: fileStreamTypes.JPEG,
			fileName: fileName,
		})
	})
	.then((response) => response.json())
	.then(responseData => {
		console.log('imageSaved: ', responseData)
		dispatch (imageSavedSuccess(responseData))
	})
	.catch((err) => {
		console.log('saveImage Error: ', err)
		dispatch(imageSaveError(err))
	})
};

export function imageSaveStarted() {
	return {type: types.IMAGE_SAVED_STARTED };
}

export function imageSavedSuccess(responseData) {
	return dispatch => {
		dispatch({
			imageFileStreamId: responseData.fileStreamId,
			type: types.IMAGE_SAVED_SUCCESS });
	};
}

export function imageSaveError(err) {
	return { err, type: types.IMAGE_SAVED_FAILURE };
}