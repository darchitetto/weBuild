import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    tab: {
        top: 0,
        elevation: 0,
        backgroundColor: '#F6F6F9',
        width: '100%',
        height: '100%',
    },
	listView: {
		width: '100%',
		height: '100%'
	},
	title:{
		textAlign: 'center',
		backgroundColor: '#F6F6F9',
	},
	text: {
		color: '#2222DC',
		fontSize: 15
	},
	textInput:{
		height: 40,
		borderColor: 'gray',
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'stretch',
		backgroundColor: 'white',
	},
	column: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'stretch',
		backgroundColor: 'white',
		width: '100%',
		height: '100%'
	},
	community: {
		flex:2,
		borderWidth: .5,
		borderRightWidth: 0,
		borderLeftWidth: 2,
		borderBottomWidth: 0,
		borderColor: 'gray',
	},
	communityIcon: {
		flex:.5,
		borderWidth: .5,
		borderRightWidth: 0,
		borderLeftWidth: 2,
		borderBottomWidth: 0,
		borderColor: 'gray',
		alignItems: 'center',
	},
	communitySubRow:{
		marginLeft: 5
	},
	categorySubRow:{
		fontSize: 12,
		marginLeft: 5

	},
	lotsSubRow:{
		marginLeft: 5,
		marginBottom: 5,
		fontSize: 10,
		alignSelf: 'stretch',

	},
	settingsButton: {
		flex:.25,
		borderTopWidth: .5,
		borderRightWidth: .5,
		borderColor: 'gray',
	},
});
