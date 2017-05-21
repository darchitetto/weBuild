import React, {Component} from 'react';
import  {connect} from 'react-redux' //takes in state and actions and will wrap component
import {
    ScrollView,
    View,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
}
    from 'react-native';


class homeScreen extends Component{
    searchPressed(){
        this.props.fetchJobs()
    }

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
                <ScrollView>

                </ScrollView>
            </View>)
    }

}

function mapStateToProps (state){
    return{
        setSearchedJobs: state.setSearchedJobs,
    }
}

export default connect(mapStateToProps)(homeScreen);

