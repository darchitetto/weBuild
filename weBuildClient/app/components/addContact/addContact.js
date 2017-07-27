import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../actions/';
import * as config from '../../lib/config';
import {
    Text,
    View,
    Modal,
    TextInput,
    Button,
    Image
} from 'react-native';
import styles from './styles';
import Icon from '../../../node_modules/react-native-vector-icons/MaterialIcons';
import AddContactModal from './addContactModal';
import * as contactType from './contactTypes';
import Camera from '../camera/camera';
import * as Progress from 'react-native-progress';

class addContact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            cameraModalVisible: false,
            isContactSelected: false,
            contactType: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            companyName: '',
            subContractorId: '',
            imageFileStreamId: null,
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
        this.setState ({cameraModalVisible:visible});
    };

	renderProgress = () => {
		if (this.props.isImageSaveStarted) {
			return ( <Progress.Circle size={50} indeterminate={true}/>)
		};
	};

    setContactTypeState = (contactType) =>{
        this.setState({contactType:contactType});
		this.setState({isContactSelected:true});
	};

    saveContact = () => {
        this.props.addContact(this.state);
        this.props.navigation.navigate('myProjects');
        this.resetScreen();
    };

	saveContactWithLogo = () => {
		this.setState({ imageFileStreamId: this.props.imageFileStreamId}, () => {
			this.props.addContact(this.state, this.props.imageFileStreamId);
		});
		this.props.navigation.navigate('myProjects');
		this.resetScreen();
	};

    resetScreen = () => {
        this.setState({isContactSelected:false});
        this.setState({contactType:''});
    };

    renderContact = () => {
        if (!this.state.modalVisible && this.state.isContactSelected) {
            switch (this.state.contactType) {
                case contactType.SUPERINTENDENT:
                    return <View>
                        <Text style={styles.header}>Add a {this.state.contactType}</Text>
                        {this.renderCommonFields()}
                        <Button title='Save' onPress={() => {this.saveContact()}}/>
                    </View>
                    break;
                case contactType.SUB_CONTRACTOR:
                    return <View>
                        <Text style={styles.header}>Add a {this.state.contactType}</Text>
                        {this.renderSubContractorFields()}
                        <Button title='Save' onPress={() => {this.saveContact()}}/>
                    </View>
                    break;
                case contactType.BUYER:
                    return <View>
                        <Text style={styles.header}>Add a {this.state.contactType}</Text>
                        {this.renderCommonFields()}
                        <Button title='Save' onPress={() => {this.saveContact()}}/>
                    </View>
                    break;
                case contactType.BUSINESS_ENTITY:
                    return <View >
                        {this.renderProgress()}
                        <Text style={styles.header}>Add a {this.state.contactType}</Text>
                        {this.renderBusinessEntityFields()}
                        <View>
                            <Button title='Save' disabled={this.props.isImageSaveStarted} onPress={() => {this.saveContactWithLogo()}}/>
                        </View>
                    </View>
                    break;
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
                            <AddContactModal {...this.props}
                                             setModalVisible={this.setModalVisible}
                                             //setContactSelectedState={this.setContactSelectedState}
                                             setContactTypeState={this.setContactTypeState}/>
                            <Button title='Close'  onPress={() => {this.setModalVisible(false)}}/>
                        </View>
                    </View>
                </Modal>
                <Button style={styles.row} title='Open Modal' onPress={() => {this.setModalVisible(true)}}/>
                {this.renderContact()}
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
                                setCameraModalVisible={this.setCameraModalVisible}
                            />
                            <Button title='Close'  onPress={() => {this.setCameraModalVisible(false)}}/>
                        </View>
                    </View>
                </Modal>
                <View>
                    {this.renderImage()}
                </View>
            </View>
        );
    }

    renderImage = () => {
        if (this.props.imageFileStreamId){
			return(
                <Image
                    style={styles.logo}
                    source={{uri: config.BASE_URL + 'fileStream?fileStreamId=' + this.props.imageFileStreamId}}
                />
            )
        }
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

addContact.defaultProps = {
    imageFileStreamId: null,
    isImageSaveStarted: false,
	isImageSavedSuccess: false,
	isImageSavedError: null};

function mapStateToProps (state){
    return{
        addContact: state.addContact,
        imageFileStreamId: state.image.imageFileStreamId,
		isImageSaveStarted: state.image.isImageSaveStarted,
		isImageSavedSuccess: state.image.isImageSavedSuccess,
		isImageSavedError: state.image.isImageSavedError,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addContact);
