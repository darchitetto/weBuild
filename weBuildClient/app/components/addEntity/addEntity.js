import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../actions/'
import {
    Text,
    View,
    ListView,
    Modal,
    TextInput,
    Button
} from 'react-native';
import styles from './styles'
import Icon from '../../../node_modules/react-native-vector-icons/MaterialIcons'
import AddEntityModal from './addEntityModal';
import * as entityTypes from './entityTypes';
import Camera from '../camera/camera';

class addEntity extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            cameraModalVisible: false,
            isEntitySelected: false,
            entityToAdd: '',
            contactType: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            companyName: '',
            subContractorId: '',
        }
    }

    static navigationOptions = {
        tabBarLabel: 'Add',
        tabBarIcon: () => (<Icon size={24} color="white" name="note-add" />)
    };

    setModalVisible = (visible) => {
        this.setState ({modalVisible:visible})
    };

    setCameraModalVisible = (visible) => {
        this.setState ({cameraModalVisible:visible})
    };

    setEntitySelectedState = (selectedEntity) =>{
        this.setState({entityToAdd:selectedEntity});
        this.setState({isEntitySelected:true});
    };

    setContactTypeState = (contactType) =>{
        this.setState({contactType:contactType});
    };

    saveEntity = () => {
        this.props.addContact(this.state);
        this.props.navigation.navigate('myProjects');
        this.resetScreen();
    }

    resetScreen = () => {
        this.setState({isEntitySelected:false});
        this.setState({entityToAdd:''});
        this.setState({contactType:''});
    }

    renderEntity = () => {
        if (!this.state.modalVisible && this.state.isEntitySelected) {
            switch (this.state.entityToAdd) {
                case entityTypes.SUPERINTENDENT:
                    return <View>
                        <Text style={styles.header}>Add a {this.state.entityToAdd}</Text>
                        {this.renderCommonFields()}
                        <Button title='Save' onPress={() => {this.saveEntity()}}/>
                    </View>
                    break;
                case entityTypes.SUB_CONTRACTOR:
                    return <View>
                        <Text style={styles.header}>Add a {this.state.entityToAdd}</Text>
                        {this.renderSubContractorFields()}
                        <Button title='Save' onPress={() => {this.saveEntity()}}/>
                    </View>
                    break;
                case entityTypes.BUYER:
                    return <View>
                        <Text style={styles.header}>Add a {this.state.entityToAdd}</Text>
                        {this.renderCommonFields()}
                        <Button title='Save' onPress={() => {this.saveEntity()}}/>
                    </View>
                    break;
                case entityTypes.BUSINESS_ENTITY:
                    return <View >
                        <Text style={styles.header}>Add a {this.state.entityToAdd}</Text>
                        {this.renderBusinessEntityFields()}
                        <Button title='Save' onPress={() => {this.saveEntity()}}/>
                    </View>
            }
        }
    }

    render() {
        return (
            <View style={styles.tab}>
                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <View>
                        <View>
                            <AddEntityModal {...this.props}
                                setModalVisible={this.setModalVisible}
                                setEntitySelectedState={this.setEntitySelectedState}
                                setContactTypeState={this.setContactTypeState}/>
                            <Button title='Close'  onPress={() => {this.setModalVisible(false)}}/>
                        </View>
                    </View>
                </Modal>
                <Button style={styles.row} title='Open Modal' onPress={() => {this.setModalVisible(true)}}/>
                {this.renderEntity()}
            </View>
        )
    }

    renderCommonFields = () => {
        return (
            <View>
                <View>
                    <Text style={styles.text}>Name</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({firstName:text})}
                        placeholder='First Name'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({lastName:text})}
                        placeholder='Last Name'
                    />
                </View>
                <View>
                    <Text style={styles.text}>Contact</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({phone:text})}
                        placeholder='Phone'
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({email:text})}
                        placeholder='Email Address'
                    />
                </View>
            </View>
        )
    }

    renderSubContractorFields = () => {
        return (
            <View>
                {this.renderCommonFields()}
                <View>
                    <Text style={styles.text}>Company</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({companyName:text})}
                        placeholder='Name'
                    />
                    <Text style={styles.text}>Sub-Contractor ID</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({subContractorId:text})}
                        placeholder='Sub-Contractor ID'
                    />
                </View>
            </View>
        )
    }

    renderBusinessEntityFields = () => {
        return (
            <View>
                {this.renderCommonFields()}
                <Text style={styles.text}>Company</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({companyName:text})}
                    placeholder='Name'/>
                <Text style={styles.text}>Company Logo</Text>
                <Icon.Button size={25} color="white" name="camera-enhance" onPress={() => {this.setCameraModalVisible(true)}} >
                    Logo
                </Icon.Button>
                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.cameraModalVisible}>
                    <View>
                        <View>
                            <Camera {...this.props}
                                captureButtonTitle='Take Photo'
                                setCameraModalVisible={this.setCameraModalVisible} />
                            <Button title='Close'  onPress={() => {this.setCameraModalVisible(false)}}/>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps (state){
    return{
        addContact: state.addContact,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addEntity);
