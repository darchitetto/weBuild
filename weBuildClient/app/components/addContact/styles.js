import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    tab: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'stretch',


        top: 56,
        elevation: 8,
        backgroundColor: '#F6F6F9',
        width: '100%',
        height: '100%',
    },
    text: {
        color: '#2222DC',
        fontSize: 15
    },
    header: {
        color: '#2222DC',
        fontSize: 20,
        textAlign: 'center'
    },
    textInput:{
        height: 40,
        borderColor: 'gray',
    },
    buttonContainer:{
        alignItems: 'center',
        alignSelf: 'center',
        width:'40%',
        paddingTop: 50
    },
    button: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        width: 200
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
        backgroundColor: 'blue',
        width: '100%',
        height: '100%'
    },
    logo:{
        width: '100%',
        height: 150
    }
});
