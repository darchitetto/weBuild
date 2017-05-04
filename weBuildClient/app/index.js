import React from 'react'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TabNavigator } from 'react-navigation'
import {
    AppRegistry,
    Text,
    Button,
    View
} from 'react-native';
import homeScreen from './components/homeScreen/homeScreen';
import schedule from './components/schedule/schedule';
import styles from './styles';


class add extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Add',
        tabBarIcon: () => (<Icon size={24} color="white" name="note-add" />)
    }

    render() {
        return (
            <View style={styles.tab}>
                <Text style={styles.text}>Lets add some shit</Text>
            </View>
        )
    }
}

class myNotifications extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'My Notifications',
        tabBarIcon: () => (<Icon size={24} color="white" name="vibration"/>)
    }

    render() {
        return (
            <View style={styles.tab}>
                <Text style={styles.text}>My Notifications</Text>
            </View>
        )
    }
}


const MyApp = TabNavigator({
    myDay: { screen: homeScreen },
    myProjects: { screen: schedule },
    add: { screen: add },
    myNotifications: { screen: myNotifications },
}, {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        bottomNavigationOptions: {
            labelColor: 'white',
            rippleColor: 'white',
            style: { height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0},
            shifting: false,
            tabs: {
                myDay: {
                    barBackgroundColor: '#3E6FF3',
                    labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
                    activeLabelColor: '#BECCF1',
                    activeIcon: <Icon size={24} color="#212121" name="home" />,
                },
                myProjects: {
                    barBackgroundColor: '#3E6FF3',
                    labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
                    activeLabelColor: '#BECCF1',
                    activeIcon: <Icon size={24} color="#212121" name="schedule" />,
                },
                add: {
                    barBackgroundColor: '#3E6FF3',
                    labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
                    activeLabelColor: '#BECCF1',
                    activeIcon: <Icon size={24} color="#212121" name="note-add" />
                },
                myNotifications: {
                    barBackgroundColor: '#3E6FF3',
                    labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
                    activeLabelColor: '#BECCF1',
                    activeIcon: <Icon size={24} color="#212121" name="vibration" />
                }
            }
        }
    }
})

AppRegistry.registerComponent('weBuildClient', () => MyApp);

//
// import React from 'react';
// import homeScreen from './components/homeScreen/homeScreen';
//
// const map = {
//     'homeScreen' : homeScreen,
// }
//
// module.exports = map;