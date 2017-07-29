import React, {Component} from 'react';
import  {connect} from 'react-redux'
import {ActionCreators} from '../../actions';
import {bindActionCreators} from 'redux'
import styles from './styles';
import * as entityTypes from '../addContact/contactTypes'
import {
	View,
	TextInput,
	Text,
	Button,
} from 'react-native';
import { Picker, Header, Title } from 'native-base';

class addCommunity extends Component{
	constructor(props){
		super(props);
		this.state = {
			communityName: '',
			numberOfLots: '',
			township: '',
			superintendent: '',
			county: '',
			selectedItem: undefined,
		}
		this.props.fetchContactByContactType(entityTypes.SUPERINTENDENT);
	}

	saveCommunity = () => {
		this.props.addCommunity(this.state);
		this.props.navigation.navigate('communities');
		this.resetScreen();
	};

	resetScreen = () => {
		this.setState({communityName:''});
		this.setState({numberOfLots:''});
		this.setState({township:''});
		this.setState({superintendent:''});
		this.setState({county:''});
	};

	superintendents(){
		return Object.keys(this.props.contacts).map(key => this.props.contacts[key]);
	};

	setSuperintendent (value) {
		this.setState({
			superintendent : value
		});
	}

	render(){
		let contactItems = this.superintendents().map( (item) => {
			return <Picker.Item key={item._id} value={item._id} label={item.firstName} />
		});

		return (
			<View>
				<View>
					<Button
						onPress={() => this.props.navigation.navigate('communities')}
						title="Back"/>
					<Text style={styles.text}>Community Name</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => this.setState({communityName:text})}
						placeholder='Community'
					/>
					<Text style={styles.text}>Number of Lots</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => this.setState({numberOfLots:text})}
						placeholder='Number of Lots'
					/>
					<Text style={styles.text}>Township</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => this.setState({township:text})}
						placeholder='Township'
					/>
					<Text style={styles.text}>Superintendent</Text>
					<Picker
						mode="dropdown"
						placeholder="Select a Superintendent"
						iosHeader="Superintendent"
						selectedValue={this.state.superintendent}
						onValueChange={this.setSuperintendent.bind(this)} >
						{contactItems}
					</Picker>
					<Text style={styles.text}>County</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => this.setState({county:text})}
						placeholder='County'
					/>
					<Button title='Save' onPress={() => {this.saveCommunity()}}/>
				</View>
			</View>
		)
	}
}

addCommunity.defaultProps = {contact: {}};

function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps (state){
	return{
		contacts: state.contact.contacts,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(addCommunity);
