import React, {Component} from 'react';
import  {connect} from 'react-redux'
import {ActionCreators} from '../../actions';
import {bindActionCreators} from 'redux'
import styles from './styles';
import {
    ScrollView,
    View,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    FlatList
}
    from 'react-native';


class homeScreen extends Component{
    constructor(props){
        super(props);
        this.props.fetchJobs()
    }

    jobs(){
        return Object.keys(this.props.jobs).map(key => this.props.jobs[key]);
    }

    render(){
        console.log('JOBS:', this.jobs())
        return (
            <View style={{marginTop:20}}>
                <Text style={styles.text}>You Are Home!!</Text>
                <View>
                    <TouchableHighlight onPress={ () => this.searchPressed() }>
                        <Text>Fetch Jobs Here</Text>

                    </TouchableHighlight>
                    <Text>The job count is: {this.props.jobCount}</Text>


                    <Text style={{marginTop:20}}>
                        I am app container

                        go to the server an get a count {this.props.jobCount}

                        <View style={{width: 500, height: 500}}>
                          <FlatList
                                    data={this.jobs()}
                                    renderItem={({item}) => <Text style={{width: 50, height: 50}}>{item.name}</Text>}
                                />
                        </View>




                    </Text>

                </View>

            </View>)
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps (state){
    return{
        setSearchedJobs: state.setSearchedJobs,
        jobCount: state.jobCount,
        jobs: state.jobs
    }
}

export default connect((mapStateToProps), mapDispatchToProps)(homeScreen);
