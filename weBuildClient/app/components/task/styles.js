import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
        height: 50,
    },
    task: {
        flex:2,
        borderWidth: .5,
        borderRightWidth: 0,
        borderLeftWidth: 5,
        borderBottomWidth: 0,
        borderColor: 'gray',
    },
    subTaskButton: {
        flex:.25,
        borderTopWidth: .5,
        borderColor: 'gray',

    },
    settingsButton: {
        flex:.25,
        borderTopWidth: .5,
        borderRightWidth: .5,
        borderColor: 'gray',
    },
    topSubRow:{
        marginLeft: 5
    },
    middleSubRow:{
        fontSize: 12,
        marginLeft: 5

    },
    bottomSubRow:{
        marginLeft: 5,
        marginBottom: 5,
        fontSize: 10,
        alignSelf: 'stretch',

    },
    progress:{
        alignSelf: 'flex-start',
        marginRight: 5
    }
});
