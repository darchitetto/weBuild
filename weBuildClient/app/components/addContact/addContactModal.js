import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from './styles'
import { Button, Icon } from 'native-base';
import * as contactType from './contactTypes';

export default class addContactModal extends React.Component {
    constructor(props){
        super(props);
    };

    static navigationOptions = {
        title: 'Add Entity',
    };

    render() {
        return (
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button iconLeft primary block onPress={() => {
                            this.props.setContactTypeState(contactType.SUPERINTENDENT);
                            this.props.setModalVisible(false);}}>
                        <Icon name='people' />
                        <Text>Add Superintendent</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block onPress={() => {
                        this.props.setContactTypeState(contactType.SUB_CONTRACTOR);
                        this.props.setModalVisible(false);}}>
                        <Icon name='people' />
                        <Text>Add Sub Contractor</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block onPress={() => {
                        this.props.setContactTypeState(contactType.BUYER);
                        this.props.setModalVisible(false);}}>
                        <Icon name='home' />
                        <Text>Add Buyer</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block onPress={() => {
						this.props.setContactTypeState(contactType.BUSINESS_ENTITY);
						this.props.setModalVisible(false);}}>
                        <Icon name='man' />
                        <Text>Create Business Entity</Text>
                    </Button>
                </View>
            </View>
        );
    }
}