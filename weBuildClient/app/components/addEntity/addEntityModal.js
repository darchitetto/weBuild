import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from './styles'
import { Button, Icon } from 'native-base';
import * as entityTypes from './entityTypes';

export default class addEntityModal extends React.Component {
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
                            this.props.setEntitySelectedState(entityTypes.SUPERINTENDENT);
                            this.props.setContactTypeState(entityTypes.SUPERINTENDENT);
                            this.props.setModalVisible(false);}}>
                        <Icon name='people' />
                        <Text>Add Superintendent</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block onPress={() => {
                        this.props.setEntitySelectedState(entityTypes.SUB_CONTRACTOR);
                        this.props.setContactTypeState(entityTypes.SUB_CONTRACTOR);
                        this.props.setModalVisible(false);}}>
                        <Icon name='people' />
                        <Text>Add Sub Contractor</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block onPress={() => {
                        this.props.setEntitySelectedState(entityTypes.BUYER);
                        this.props.setContactTypeState(entityTypes.BUYER);
                        this.props.setModalVisible(false);}}>
                        <Icon name='home' />
                        <Text>Add Buyer</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block onPress={() => {
                        this.props.setEntitySelectedState(entityTypes.BUSINESS_ENTITY);
                        this.props.setModalVisible(false);}}>
                        <Icon name='man' />
                        <Text>Create Business Entity</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block onPress={() => {
                        this.props.setEntitySelectedState(entityTypes.COMMUNITY);
                        this.props.setModalVisible(false);}}>
                        <Icon name='image' />
                        <Text>Create Community</Text>
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button iconLeft primary block onPress={() => {
                        this.props.setEntitySelectedState(entityTypes.LOT);
                        this.props.setModalVisible(false);}}>
                        <Icon name='train' />
                        <Text>lot</Text>
                    </Button>
                </View>
            </View>
        );
    }
}