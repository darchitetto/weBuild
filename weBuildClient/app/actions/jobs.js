import * as types from './types'

export function addJob() {
    return{
        type: types.ADD_JOB
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
        fetch('http://localhost:8080/api/jobs')
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                dispatch(setSearchedJobs({jobs: responseData}))
                return responseData;
            })
            .done();
    }
}