import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import Icon from './node_modules/react-native-vector-icons/MaterialIcons'


var Sith_Lord = "Darth Vador";
var MainScreenTitle = "My Chats";

// class RecentChatsScreen extends React.Component {
//   render() {
//     return <View style = {styles.backgrounds}>
//             <Text>List of recent chats</Text>
//             <Button color = '#283018'
//               onPress={() => this.props.navigation.navigate('Chat', { user: Sith_Lord })}
//               title="Chat with Darth Vador"
//               />
//           </View>
//   }
// }

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'My Notifications',
        tabBarIcon: () => (<Icon size={24} color="white" name="vibration"/>)
    }

    render() {
        return <View style = {styles.backgrounds}>
                <Text>List of recent chats</Text>
                <Button color = '#283018'
                  onPress={() => this.props.navigation.navigate('Chat', { user: Sith_Lord })}
                  title="Chat with Darth Vador"
                  />
              </View>
    }
}

class AllContactsScreen extends React.Component {
  render() {
    return <View style = {styles.backgrounds}>
            <Text>List of all chats ever</Text>
            <Button color = '#283018'
              onPress={() => this.props.navigation.navigate('Chat', { user: Sith_Lord })}
              title="Chat with Darth Vador"
              />
          </View>
  }
}

class ContactsTabScreen extends React.Component {
  render() {
    return <View style = {styles.backgrounds}>
            <Text>Here is a list of contacts</Text>
          </View>
  }
}

const MainScreenNavigator = TabNavigator({
    Recent: { screen: MyNotificationsScreen },
    All: { screen: AllContactsScreen },
    Contacts: { screen: ContactsTabScreen},
  },
  {
      tabBarOptions : {
          activeTintColor: '#283018',
          activeBackgroundColor: '#729f98',
          inactiveTintColor: '#283018',
          inactiveBackgroundColor: '#f0eceb',
          labelStyle: {
            fontSize: 20,
            alignItems: 'center',
          },
      }
    }
);

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome Sith Lords',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.backgrounds}>
        <Text>Hello, Chat App!</Text>
        <Button color = '#283018'
          onPress={() => navigate('Chat', { user: Sith_Lord })}
          title="Chat with Darth Vador"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button color = '#283018'
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
        />
      ),
    };
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style = {styles.backgrounds}>
        <Text>Hi, this is {params.user}, how can I help you?</Text>
      </View>
    );
  }
}

class UserInfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {user} = state.params;
    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
      headerRight: (
        <Button color = '#283018'
          title={isInfo ? 'Done' : `${user}'s info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
        />
      ),
    };
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style = {styles.backgrounds}>
        <Text>{params.user} phone number is 555-5555.</Text>
      </View>
    );
  }
}

MainScreenNavigator.navigationOptions = {
  title: MainScreenTitle,
  headerTintColor:  '#283018',
  headerStyle: {backgroundColor : '#f0eceb'},
};

const weBuildClient = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
  Info: { screen: UserInfoScreen },
});


var styles = StyleSheet.create({
  container: {
    backgroundColor: '#729f98',
    alignItems: 'center',
    height: 600
  },
  backgrounds: {
    backgroundColor: '#f0eceb',
  },
  header_text: {
    backgroundColor: '#729f98',
    alignItems: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#f0eceb',
  },
  button: {
    color: '#283018'
  },
  tabs: {
    backgroundColor: '#729f98',
    alignItems: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#f0eceb',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#f0eceb'
  },
});

AppRegistry.registerComponent('weBuildClient', () => weBuildClient);
