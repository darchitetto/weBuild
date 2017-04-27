import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    listView: {
        paddingTop: 20,
        width: '100%',
        height: 20
    },
    community:{
        textAlign: 'center'
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'white',
        borderWidth: .5,
        borderColor: 'gray',
        height: 50,
    },
});
