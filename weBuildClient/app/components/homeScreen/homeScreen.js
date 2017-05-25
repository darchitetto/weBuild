import React, {Component} from 'react';
import  {connect} from 'react-redux'
import {ActionCreators} from '../../actions';
import {bindActionCreators} from 'redux'

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
    searchPressed(){
        this.props.fetchJobs();
        console.log('here:', this.props.searchJobs)
    }

    componentDidMount(){
       this.props.fetchJobs();
    };

    render(){
        return (
            <View style={{marginTop:20}}>
                <View>
                    <TouchableHighlight onPress={ () => this.searchPressed() }>
                        <Text>Fetch Jobs</Text>

                    </TouchableHighlight>
                    <Text>The job count is: {this.props.jobCount}
                    </Text>
                </View>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
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
        searchJobs: state.searchJobs
    }
}

export default connect((mapStateToProps), mapDispatchToProps)(homeScreen);

