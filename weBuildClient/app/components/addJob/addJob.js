import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../actions/'
import styles from './styles'
import {
	View,
	TextInput,
	Text,
	Button,
} from 'react-native';
import {
	Picker,
}
from 'native-base';

class addJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            name: '',
            contractor: '',
            duration: 0,
            category: '',
            startDate: new Date(),
            jobNumber: 0,
        }
    };

	setCategory (value) {
		this.setState({
			category : value
		});
	}

	setDuration (value) {
		this.setState({
			duration : value
		});
	}

    saveJob = () => {
        this.props.addJob(this.state);
        this.props.navigation.navigate('myProjects');
    };

    render() {
		const duration = [1,2,3,4,5,6,7,8,9,10];

		let durationItems = duration.map( (item) => {
			return <Picker.Item key={item} value={item} label={item} />
		});
        return (
            <View>
                <View>
                    <Button
                        onPress={() => this.props.navigation.navigate('myProjects')}
                        title="Back"/>
                    <Text style={styles.text}>Job Name</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({name:text})}
                        placeholder='Name'
                    />
                    <Text style={styles.text}>Contractor</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({contractor:text})}
                        placeholder='Contractor'
                    />
                    <Text style={styles.text}>Duration</Text>
                    <Picker
                        mode="dropdown"
                        placeholder="Select a Duration"
                        iosHeader="Duration"
                        selectedValue={this.state.duration}
                        onValueChange={this.setDuration.bind(this)} >
						{durationItems}
                    </Picker>
                    <Text style={styles.text}>Category</Text>
                    <Picker
                        mode="dropdown"
                        placeholder="Select a Category"
                        iosHeader="Category"
                        selectedValue={this.state.category}
                        onValueChange={this.setCategory.bind(this)} >
                        <Picker.Item label = "Outside" value = "Outside" />
                        <Picker.Item label = "Inside" value = "Inside" />
                        <Picker.Item label = "Landscape" value = "Landscape" />
                    </Picker>
                    <Text style={styles.text}>Start Date</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({startDate:text})}
                        placeholder='Start Date'
                    />
                    <Text style={styles.text}>Job Number</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({jobNumber:text})}
                        placeholder='Job Number'
                    />
                    <Button title='Save' onPress={() => {this.saveJob()}}/>
                </View>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps (state){
    return{
        addJob: state.addJob,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addJob);
