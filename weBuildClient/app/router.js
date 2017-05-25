import React from 'react'
import  {connect} from 'react-redux' //takes in state and actions and will wrap component
import {bindActionCreators} from 'redux'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import homeScreen from './components/homeScreen/homeScreen';
import schedule from './components/schedule/schedule';
import styles from './styles';
import AddJob from './components/addJob/addJob'
import {ActionCreators} from './actions'

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

const MainNavigation = TabNavigator({
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

const JobActions = StackNavigator({
    Add: { screen: AddJob },
});


const Router = StackNavigator({
    MainNavigation: {
        screen: MainNavigation,

    },
    JobActions: {
        screen: JobActions,
    },
}, {
    mode: 'modal',
    headerMode: 'none',
});

export default Router;