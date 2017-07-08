import * as types from './types'
import * as fileStreamTypes from '../lib/fileStreamTypes'

export function addImage (base64Image, fileName){
//middleware => return a function rather than object which is the default. By returning a function, the promise will be resolved
	return (dispatch, getState) => {
		saveImage(base64Image, fileName, dispatch);
	}
}

//TODO: Add middleware for begin, success, failure. It has been done for success: IMAGE_SAVED_FAILURE, IMAGE_SAVED_STARTED
const saveImage = (base64Image, fileName, dispatch) => {
	return fetch('http://127.0.0.1:8080/api/fileStream', {
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
			dispatch ({type: types.IMAGE_SAVED_SUCCESS,
				 imageFileStreamId: responseData.fileStreamId
				})
			})
		.catch((err) => {
			console.log('saveImage Error: ', err)
	})
};