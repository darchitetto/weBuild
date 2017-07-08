import * as Progress from 'react-native-progress';
import moment from 'moment';
import React, { Component } from 'react';
import  {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../actions';
import {
    AppRegistry,
    View,
    Text,
    FlatList,
    Button,
    Modal,
    TouchableHighlight,
    Image,
} from 'react-native';
import styles from './styles'
import SubJob from '../../components/subJob/subJob';
import JobSettings from '../../components/jobSettings/jobSettings';

class job extends Component{
    constructor (props){
        super(props);

        this.state = {
            showSubJob: false,
            modalVisible: false,
        }
    }

    jobs(){
        //Olny return a few until this is built out
        let jobs = Object.keys(this.props.jobs).map(key => this.props.jobs[key]);
        return jobs.splice(jobs.length - 3);
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
                    <FlatList
                        keyExtractor={(item,index) => item._id}
                        data={this.jobs()}
                        renderItem={({item}) => <SubJob data={item}/>}
                    />
                </View>
            );
        }
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps (state){
    return{
        jobs: state.jobs,
    }
}

export default connect((mapStateToProps), mapDispatchToProps)(job);