import tasksModel from '../../../models/tasksModel';
import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import styles from './styles'

export default class task extends Component{
    render(){
        return (
            <View>
                <Text style={styles.id}>{this.props.name}</Text>
                <Text style={styles.leftContainer}>Category: {this.props.category}</Text>
                <Text style={styles.rightContainer}>Contractor: {this.props.contractor}</Text>
                <Text style={styles.leftContainer}>Duration: {this.props.duration}</Text>
                <Text style={styles.rightContainer}>Start Date: {this.props.startDate}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('task', () => task);