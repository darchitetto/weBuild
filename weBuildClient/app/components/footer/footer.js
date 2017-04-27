import React from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
import {
    AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import builderInfo from '../builderInfo/builderInfo';
import schedule from '../schedule/schedule';
import homeScreen from '../homeScreen/homeScreen';

export default class footer extends React.Component {

    static navigationOptions = {
        title: 'My Home',
    };
    render() {
        const { navigate } = this.props.navigator;

        return (
            <Footer >
                <FooterTab>
                    <Button>
                        <Text>My Day</Text>
                    </Button>
                    <Button onPress={() => navigate('Schedule')}>
                        <Text>My Schedule</Text>
                    </Button>
                    <Button>
                        <Text>Add</Text>
                    </Button>
                    <Button>
                        <Text>My Notifications</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const footerNavigation = StackNavigator({
    BuilderInfo: {screen: builderInfo},
    Schedule: {screen: schedule}

});

AppRegistry.registerComponent('footerNavigation', () => footerNavigation);
