import React, { Component } from 'react';
import  {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../actions';
import {
    Text,
    ListView,
    View
} from 'react-native';
import styles from './styles'
import Job from '../../containerComponents/job/job'
import Icon from 'react-native-vector-icons/MaterialIcons'

const REQUEST_URL = 'http://localhost:8080/api/jobs';

class schedule extends Component {
    constructor (props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2, //todo why do we need this
            }),
            loaded: false
        }
    };

    static navigationOptions = {
        tabBarLabel: 'Schedule',
        tabBarIcon: () => (<Icon size={24} color="white" name="schedule" />)
    };

    componentDidMount(){
        this.fetchData();
    };

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    loaded: true,
                });
            })
            .catch( (ex) => {

            })
            .done();
    };

    render(){
        return(
            <View style={styles.tab}>
                <Text style={styles.community}>Schedule - Community 1 </Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderJob(rowData)}
                    removeClippedSubviews={false}
                    style={styles.listView}
                />
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
        setSearchedJobs: state.setSearchedJobs,
        jobCount: state.jobCount,
        jobs: state.jobs,
    }
}

export default connect((mapStateToProps), mapDispatchToProps)(schedule);
