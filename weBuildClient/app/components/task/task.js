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
import SubTask from '../subTask/subTask'

export default class task extends Component{
    constructor (){
        super();
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2, //todo why do we need this
            }),
            loaded: false,
            showSubTask: false
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
            <View>
                <View style={styles.row}>
                    <View style={[styles.column, styles.task]}>
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
                        <Button transparent onPress={this.toggleSubTask}>
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
                    {this.showHideSubTask()}
                </View>
            </View>
        );
    }

    toggleSubTask = () =>{
        this.setState({
            showSubTask: !this.state.showSubTask
        });
    }

    showHideSubTask = () => {
        if (this.state.showSubTask) {
            return (
                <View style={styles.column}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderSubTask}
                        style={styles.listView}
                    />
                </View>
            );
        }
    }

     renderSubTask = (taskItem) => {
         return (
             <SubTask name={taskItem.name}
                   category={taskItem.category}
                   contractor={taskItem.contractor}
                   duration={taskItem.duration}
                   durationType={taskItem.durationType}
                   startDate={taskItem.startDate}
             />
         );
    }
}




AppRegistry.registerComponent('task', () => task);

