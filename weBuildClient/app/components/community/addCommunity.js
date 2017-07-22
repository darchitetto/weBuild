import React, {Component} from 'react';
import  {connect} from 'react-redux'
import {ActionCreators} from '../../actions';
import {bindActionCreators} from 'redux'
import styles from './styles';
import {
	View,
	TextInput,
	Text,
	Button
} from 'react-native';

class addCommunity extends Component{
	constructor(props){
		super(props);
		this.state = {
			communityName: '',
			numberLots: '',
			township: '',
			superintendent: '',
			county: '',
		}
	}

	saveCommunity = () => {
		this.props.addCommunity(this.state);
		this.props.navigation.navigate('communities');
		this.resetScreen();
	};

	resetScreen = () => {
		this.setState({communityName:''});
		this.setState({numberLots:''});
		this.setState({township:''});
		this.setState({superintendent:''});
		this.setState({county:''});
	};

	render(){
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
						onChangeText={(text) => this.setState({numberLots:text})}
						placeholder='Number of Lots'
					/>
					<Text style={styles.text}>Township</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => this.setState({township:text})}
						placeholder='Township'
					/>
					<Text style={styles.text}>Superintendent</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => this.setState({superintendent:text})}
						placeholder='Superintendent'
					/>
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

function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps (state){
	return{
		addCommunity: state.addCommunity,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(addCommunity);
