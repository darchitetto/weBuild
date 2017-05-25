import React, {Component} from 'react'
import Router from '../router'

export default class AppContainer extends Component {
    render(){
        return (
            <Router {...this.props}  />
        )
    }
}