import tasksModel from '../../../models/tasksModel';
import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    ListView,
    View
} from 'react-native';
import styles from './styles'
import Task from '../task/task'

export default class schedule extends Component {

    constructor (){
        console.warn('here' )

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
            dataSource: this.state.dataSource.cloneWithRows(tasksModel.tasks),
            loaded: true
        });
    }

    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderTask}
                style={styles.listView}
            />
        );
    }

    renderTask(taskItem){
        return (
            <Task name={taskItem.name}
                  category={taskItem.category}
                  contractor={taskItem.contractor}
                  duration={taskItem.duration}
                  startDate={taskItem.startDate}
            />
        );
    }
    
}
AppRegistry.registerComponent('schedule', () => schedule);