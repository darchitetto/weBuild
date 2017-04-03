import React from 'react';
import {
    AppRegistry,
    Text,
    Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import builderInfo from '../builderInfo/builderInfo'

class homeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome to weBuild',
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <Text>Hello, welcome to weBuild!</Text>,
            <Button
                onPress={() => navigate('BuilderInfo')}
                title="View Available Builder List in weBuild"
                color="#841584"
            />
        );
    }
}

const weBuildClient = StackNavigator({
    Home: { screen: homeScreen },
    BuilderInfo: {screen: builderInfo}
});

AppRegistry.registerComponent('weBuildClient', () => weBuildClient);