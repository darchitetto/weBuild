import jobsModel from '../../../models/jobModel';
import React, { Component } from 'react';
import {
    Text,
    ListView,
    View
} from 'react-native';
import styles from './styles'
import Job from '../job/job'
import Icon from 'react-native-vector-icons/MaterialIcons'

const REQUEST_URL = 'http://localhost:8080/api/jobs';

export default class schedule extends Component {
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
