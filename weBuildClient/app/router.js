import React from 'react'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from '../node_modules/react-native-vector-icons/MaterialIcons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import {
    Text,
    View
} from 'react-native';
import communities from './components/community/communities';
import schedule from './components/schedule/schedule';
import styles from './styles';
import AddJob from './components/addJob/addJob';
import AddCommunity from './components/community/addCommunity';
import AddEntity from './components/addContact/addContact';

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
	communities: { screen: communities },
    myProjects: { screen: schedule },
    add: { screen: AddEntity },
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
                communities: {
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
                    activeIcon: <Icon size={24} color="#212121" name="note-add" />,
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
    AddJob: { screen: AddJob },
});

const CommunityActions = StackNavigator({
	AddCommunity: { screen: AddCommunity },
});


const Router = StackNavigator({
    MainNavigation: {
        screen: MainNavigation,

    },
    JobActions: {
        screen: JobActions,
    },
	CommunityActions: {
		screen: CommunityActions,
	},
}, {
    mode: 'modal',
    headerMode: 'none',
});

export default Router;