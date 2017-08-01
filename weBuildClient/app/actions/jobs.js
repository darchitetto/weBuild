import * as types from './types';
import * as config from '../lib/config';

export function addJob (job){

	return (dispatch, getState) => {
		saveJob(job, dispatch);
		setTimeout(() => fetchJobs(), 5000);

	}
}

export function setSearchedJobs ({jobs}){
    return {
        type: types.SET_SEARCHED_JOBS,
        jobs
    }
}

export function fetchJobs (){
    console.log('FETCH JOBS')
    return (dispatch, getState) => {
        fetch(config.BASE_URL + 'jobs')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                dispatch(setSearchedJobs({jobs: responseData}))
                return responseData;
            })
            .done();
    }
};

const saveJob = (job, dispatch) => {
    console.log('ACTION: save JOB', job)
    fetch(config.BASE_URL + 'jobs', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: job.name,
            contractor: job.contractor,
            duration: job.duration,
            category: job.category,
            startDate: job.startDate,
            jobNumber: job.jobNumber,
        })
    }).then((responseData) => {
        console.log('saveJobResponse', responseData)
		dispatch (jobSaveSuccess(responseData))
    })
    .catch((error) => {
        console.log('Job Error: ', error)
        dispatch(jobSaveError(error))
    })
};

export function jobSaveSuccess(responseData) {
	return dispatch => {
		dispatch({
			type: types.JOB_SAVED_SUCCESSS });
	};
};

export function jobSaveError(err) {
	return { err, type: types.JOB_SAVED_FAILURE };
};