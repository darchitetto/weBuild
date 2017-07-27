import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from './styles'
import { Button, Icon } from 'native-base';

export default class communitySettings extends React.Component {
    constructor(props){
        super(props);
    };

    static navigationOptions = {
        title: 'Community Settings',
    };

    render() {
        return (
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button iconLeft primary block onPress={() => {
                            this.props.setModalVisible(false);}}>
                        <Icon name='add' />
                        <Text>Edit Community</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block onPress={() => {
						this.props.setModalVisible(false);}}>
                        <Icon name='trash' />
                        <Text>Delete Community</Text>
                    </Button>
                </View>
            </View>
        );
    }
}