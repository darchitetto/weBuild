import React, { Component } from 'react';
import  {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../actions';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import styles from './styles'
import Job from '../job/job'
import Icon from '../../../node_modules/react-native-vector-icons/MaterialIcons'

class schedule extends Component {
    constructor (props){
        super(props);
        this.props.fetchJobs()
    };

    static navigationOptions = {
        tabBarLabel: 'Schedule',
        tabBarIcon: () => (<Icon size={24} color="white" name="schedule" />)
    };

    jobs(){
        return Object.keys(this.props.jobs).map(key => this.props.jobs[key]);
    }

    render(){
        console.log('JOBS:', this.jobs())

        return(
            <View style={styles.tab}>
                <Text style={styles.community}>Schedule - Community 1 </Text>
                <Text>job Count is {this.props.jobCount}</Text>
                <View style={styles.listView}>
                    <FlatList
                        keyExtractor={(item,index) => item._id}
                        data={this.jobs()}
                        renderItem={({item}) =>
                            this.renderJob(item)}
                    />
                </View>
            </View>
        );
    };

    renderJob(jobItem){
        return (
            <Job {...this.props}
                name={jobItem.name}
                category={jobItem.category}
                contractor={jobItem.contractor}
                duration={jobItem.duration}
                durationType={jobItem.durationType}
                startDate={jobItem.startDate}
            />
        );
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps (state){
    return{
        jobCount: state.jobCount,
        jobs: state.jobs,
    }
}

export default connect((mapStateToProps), mapDispatchToProps)(schedule);