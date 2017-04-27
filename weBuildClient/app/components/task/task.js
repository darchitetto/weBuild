import * as Progress from 'react-native-progress';
import React, { Component } from 'react';
import { Container, Content, Button, Icon } from 'native-base';
import {
    AppRegistry,
    View,
    Text,
} from 'react-native';
import styles from './styles'

export default class task extends Component{
    render(){
        return (
            <View style={styles.row}>
                <View style={[styles.column, styles.task]}>
                    <View style={styles.row}>
                        <Text style={styles.topRow}>{this.props.category}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.middleRow}>Contractor: {this.props.contractor}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.bottomRow} >Start Date: {this.props.startDate}</Text>
                        <Text style={styles.bottomRow} >Duration: {this.props.duration}  {this.props.durationType}</Text>
                        <Progress.Bar style={styles.progress} progress={.40} width={50} height={6} />
                    </View>
                </View>
                <View style={[styles.column, styles.subTask]}>
                    <Button transparent>
                        <Text>v</Text>
                    </Button>
                </View>
                <View style={[styles.column, styles.settings]}>
                    <Button transparent>
                        <Text>:</Text>
                    </Button>
                </View>

            </View>
        );
    }
}

AppRegistry.registerComponent('task', () => task);

