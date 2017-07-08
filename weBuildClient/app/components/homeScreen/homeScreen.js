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
    }

    jobs(){
        // return Object.keys(this.props.jobs).map(key => this.props.jobs[key]);
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
        jobCount: state.job.jobCount,
    }
}

export default connect((mapStateToProps), mapDispatchToProps)(homeScreen);
