import React, {Component} from 'react';
import  {connect} from 'react-redux'
import {ActionCreators} from '../../actions';
import {bindActionCreators} from 'redux'
import Icon from '../../../node_modules/react-native-vector-icons/MaterialIcons'
import styles from './styles';
import {
    View,
    Text,
    FlatList,
    Button
}
    from 'react-native';


class communities extends Component{
	constructor (props){
		super(props);
		this.props.fetchCommunities();
	};

	static navigationOptions = {
		tabBarLabel: 'Add Community',
		tabBarIcon: () => (<Icon size={24} color="white" name="home" />)
	};

	communities(){
		return Object.keys(this.props.communities).map(key => this.props.communities[key]);
	}

	render(){
		console.log('COMMUNITIES:', this.communities())
		return(
            <View style={styles.tab}>
				<Button title='Add Community'
						onPress={() => {this.props.navigation.navigate('AddCommunity')}}
				/>
                <Text style={styles.community}>Communities</Text>
                <Text>Community Count is {this.props.communityCount}</Text>
                <View style={styles.listView}>
                    <FlatList
                        keyExtractor={(item,index) => item._id}
                        data={this.communities()}
                        renderItem={({item}) =>
							this.renderCommunity(item)}
                    />
                </View>
            </View>
		);
	};

	renderCommunity(community){
		return (
			<View>
				<Text>
					Name: {community.name}
				</Text>
				<Text>
					Township: {community.township}
				</Text>
				<Text>
					County: {community.county}
				</Text>
				<Text>
					Superintendent: {community.superintendent}
				</Text>
			</View>
		);
	};
}

communities.defaultProps = {communities: {}};
function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps (state){
	return{
		communityCount: state.community.communityCount,
		communities: state.community.communities,
	}
}

export default connect((mapStateToProps), mapDispatchToProps)(communities);
