import React from 'react';
import {
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

export default class homeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: () => (<Icon size={24} color="white" name="home" />)
    };

    render() {
        return (
            <View style={styles.tab}>
                <Text style={{textAlign: 'center'}}>Home Screen</Text>
            </View>
        );
    }
};

