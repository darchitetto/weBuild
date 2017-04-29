import * as Progress from 'react-native-progress';
import tasksModel from '../../../models/tasksModel';
import React, { Component } from 'react';
import { Container, Content, Button, Icon } from 'native-base';
import {
    AppRegistry,
    View,
    Text,
    ListView,
} from 'react-native';
import styles from './styles'

export default class subTask extends Component{
    constructor (){
        super();
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2, //todo why do we need this
            }),
            loaded: false,
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(tasksModel.tasks),
            loaded: true
        });
    }

    render(){
        return (
            <View style={styles.row}>
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
                        <Button transparent onPress={this.toggleSubTask}>
                            <Text>v</Text>
                        </Button>
                    </View>
                    <View style={[styles.column, styles.settings]}>
                        <Button transparent>
                            <Text>:</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('subTask', () => subTask);

