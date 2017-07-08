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

export default connect(mapDispatchToProps)(AppContainer);