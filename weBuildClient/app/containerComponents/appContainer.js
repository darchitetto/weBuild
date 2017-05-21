import React, {Component} from 'react'
import  {connect} from 'react-redux' //takes in state and actions and will wrap component
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../actions'
import {Router} from '../router'
import HomeScreen from '../components/homeScreen/homeScreen'

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

export default connect((state) => {
    return {
        jobCount: state.jobCount
    }
}, mapDispatchToProps)(AppContainer);
