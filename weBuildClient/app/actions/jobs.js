import * as types from './types';
import * as config from '../lib/config';

export function addJob (job){
    saveJob(job);
    setTimeout(() => fetchJobs(), 5000);

    return {
        type: types.JOB_ADDED,
    }
}

export function setSearchedJobs ({jobs}){
    return {
        type: types.SET_SEARCHED_JOBS,
        jobs
    }
}

export function fetchJobs (){
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
}

const saveJob = (job) => {
    fetch(config.BASE_URL + + 'jobs', {
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
    });
};