import * as Progress from 'react-native-progress';
import React, { Component } from 'react';
import  {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../actions';
import Icon from '../../../node_modules/react-native-vector-icons/MaterialIcons'
import {
	View,
	Text,
	Button,
} from 'react-native';
import styles from './styles'

class community extends Component{
	constructor (props){
		super(props);
	}

	render(){
		return (
			<View>
				<View style={styles.row}>
					<View style={[styles.column, styles.communityIcon]}>
						<Icon size={40} color="black" name="account-balance" />
					</View>
					<View style={[styles.column, styles.community]}>
						<View style={styles.row}>
							<Text style={styles.communitySubRow}>Community: {this.props.name}</Text>
						</View>
						<View style={styles.row}>
							<Text style={styles.categorySubRow}>Township: {this.props.township}</Text>
						</View>
						<View style={styles.row}>
							<Text style={styles.managerSubRow}> Management: {this.props.superintendent}</Text>
						</View>
						<View style={styles.row}>
							<Text style={styles.lotsSubRow}> Number of Lots: {this.props.numberOfLots}</Text>
						</View>
					</View>
					<View style={[styles.column, styles.settingsButton]}>
						<Button title=':' onPress={() => this.props.navigation.navigate('communities')}/>
					</View>
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
		jobs: state.job.jobs,
	}
}

export default connect((mapStateToProps), mapDispatchToProps)(community);