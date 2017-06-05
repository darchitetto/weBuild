import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from './styles'
import { Button, Icon } from 'native-base';

export default class jobSettings extends React.Component {
    constructor(props){
        super(props);
    };

    static navigationOptions = {
        title: 'Job Settings',
    };

    render() {
        return (
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button iconLeft primary block onPress={() => {
                            this.props.navigation.navigate('Add');
                            this.props.setModalVisible(false);}}>
                        <Icon name='add' />
                        <Text>Add Job</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block>
                        <Icon name='trash' />
                        <Text>Trash</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block>
                        <Icon name='git-merge' />
                        <Text>Create a Job</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block>
                        <Icon name='git-network' />
                        <Text>Create a Group</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block>
                        <Icon name='color-palette' />
                        <Text>Job Color</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block>
                        <Icon name='checkmark' />
                        <Text>Mark Complete</Text>
                    </Button>
                </View>
            </View>
        );
    }
}