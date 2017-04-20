import React from 'react';
import {
    AppRegistry,
    Text,
    Button,
    View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import builderInfo from '../builderInfo/builderInfo';
import schedule from '../schedule/schedule';

class homeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome to weBuild',
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Hello, welcome to weBuild!</Text>
                <Button
                    onPress={() => navigate('Schedule')}
                    title="View Available Builder List in weBuild"
                    color="#841584"
                />
            </View>
        );
    }
}

const weBuildClient = StackNavigator({
    Home: { screen: homeScreen },
    BuilderInfo: {screen: builderInfo},
    Schedule: {screen: schedule}

});

AppRegistry.registerComponent('weBuildClient', () => weBuildClient);