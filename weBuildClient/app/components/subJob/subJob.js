import * as Progress from 'react-native-progress';
import jobsModel from '../../../models/jobModel';
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    ListView,
    Button
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
            showSubJob: false
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(jobsModel.jobs),
            loaded: true
        });
    }

    render(){
        return (
            <View style={styles.row}>
                <View style={styles.row}>
                    <View style={[styles.column, styles.subJob]}>
                        <View style={styles.row}>
                            <Text style={styles.topSubRow}>{this.props.category}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.middleSubRow}>Contractor: {this.props.contractor}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.bottomSubRow} >Start Date: {this.props.startDate}</Text>
                            <Text style={styles.bottomSubRow} >Duration: {this.props.duration}  {this.props.durationType}</Text>
                            <Progress.Bar style={styles.progress} progress={.40} width={50} height={6} />
                        </View>
                    </View>
                    <View style={[styles.column, styles.settings]}>
                        <Button title=':' onPress={this.toggleSettings}/>
                    </View>
                </View>
            </View>
        );
    }

    toggleSettings = () =>{
        this.setState({
            settings: !this.state.settings
        });
    }
}

AppRegistry.registerComponent('subJob', () => subJob);

