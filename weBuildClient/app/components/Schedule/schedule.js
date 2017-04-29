import jobsModel from '../../../models/jobModel';
import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    ListView,
    View
} from 'react-native';
import styles from './styles'
import Job from '../job/job'

export default class schedule extends Component {

    constructor (){
        super();
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2, //todo why do we need this
            }),
            loaded: false
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
        return(
            <View style={styles.column}>
                <Text style={styles.community}>Schedule - Community 1 </Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderJob}
                    style={styles.listView}
                />
            </View>
        );
    }

    renderJob(jobItem){
        return (
            <Job name={jobItem.name}
                 category={jobItem.category}
                 contractor={jobItem.contractor}
                 duration={jobItem.duration}
                 durationType={jobItem.durationType}
                 startDate={jobItem.startDate}
            />
        );
    }
    
}
AppRegistry.registerComponent('schedule', () => schedule);