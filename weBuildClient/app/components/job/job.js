import * as Progress from 'react-native-progress';
import jobModel from '../../../models/jobModel';
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    ListView,
    Button
} from 'react-native';
import styles from './styles'
import SubJob from '../subJob/subJob'

export default class task extends Component{
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
            dataSource: this.state.dataSource.cloneWithRows(jobModel.jobs),
            loaded: true
        });
    }

    render(){
        return (
            <View>
                <View style={styles.row}>
                    <View style={[styles.column, styles.job]}>
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
                    <View style={[styles.column, styles.subTaskButton]}>
                        <Button transparent onPress={this.toggleSubJob}>
                            <Text>v</Text>
                        </Button>
                    </View>
                    <View style={[styles.column, styles.settingsButton]}>
                        <Button transparent>
                            <Text>:</Text>
                        </Button>
                    </View>
                </View>
                <View style={styles.row}>
                    {this.showHideSubJob()}
                </View>
            </View>
        );
    }

    toggleSubJob = () =>{
        this.setState({
            showSubJob: !this.state.showSubJob
        });
    }

    showHideSubJob = () => {
        if (this.state.showSubJob) {
            return (
                <View style={styles.column}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderSubJob}
                        style={styles.listView}
                    />
                </View>
            );
        }
    }

     renderSubJob = (jobItem) => {
         return (
             <SubJob name={jobItem.name}
                     category={jobItem.category}
                     contractor={jobItem.contractor}
                     duration={jobItem.duration}
                     durationType={jobItem.durationType}
                     startDate={jobItem.startDate}
             />
         );
    }
}




AppRegistry.registerComponent('job', () => job);

