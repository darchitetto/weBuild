import React, {Component} from 'react'
import Router from './router'
import {ActionCreators} from './actions';
import {bindActionCreators} from 'redux'
import  {connect} from 'react-redux'


class AppContainer extends Component {
    render(){
        return (
            <Router {...this.props}  />
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps (state){
    return{
        setSearchedJobs: state.setSearchedJobs,
        jobCount: state.jobCount,
        jobs: state.jobs
    }
}

export default connect((mapStateToProps), mapDispatchToProps)(AppContainer);