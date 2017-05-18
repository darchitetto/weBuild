import * as Progress from 'react-native-progress';
import moment from 'moment';
import jobModel from '../../../models/jobModel';
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    ListView,
    Button,
    Modal,
    TouchableHighlight,
    Image,
} from 'react-native';
import styles from './styles'
import SubJob from '../subJob/subJob';
import JobSettings from '../jobSettings/jobSettings';


export default class job extends Component{
    constructor (props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2, //todo why do we need this
            }),
            loaded: false,
            showSubJob: false,
            modalVisible: false,
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

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    formatDate = (date) =>{
        return moment(date).format('YYYY-DD-MM');
    }

    render(){
        return (
            <View>
                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <View>
                        <View>
                            <JobSettings {...this.props} setModalVisible={this.setModalVisible}/>
                            <Button title='Close'  onPress={() => {this.setModalVisible(false)}}/>
                        </View>
                    </View>
                </Modal>
                <View style={styles.row}>
                    <View style={[styles.column, styles.job]}>
                        <View style={styles.row}>
                            <Text style={styles.topSubRow}>{this.props.category}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.middleSubRow}>Contractor: {this.props.contractor}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.bottomSubRow} >Start Date: {this.formatDate(this.props.startDate)}</Text>
                            <Text style={styles.bottomSubRow} >Duration: {this.props.duration}  {this.props.durationType}</Text>
                            <Progress.Bar style={styles.progress} progress={.40} width={50} height={6} />
                        </View>
                    </View>
                    <View style={[styles.column, styles.subTaskButton]}>
                        <Button title='v' onPress={this.toggleSubJob}/>
                    </View>
                    <View style={[styles.column, styles.settingsButton]}>
                        <Button title=':'  onPress={() => {this.setModalVisible(true)
                        }}>
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
                        renderRow={(subJob) => <SubJob data={subJob} />}
                        style={styles.listView}
                    />
                </View>
            );
        }
    }
}
