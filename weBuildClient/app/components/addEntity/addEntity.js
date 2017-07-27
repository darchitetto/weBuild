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
    Button,
    Image
} from 'react-native';
import styles from './styles'
import Icon from '../../../node_modules/react-native-vector-icons/MaterialIcons'
import AddEntityModal from './addEntityModal';
import * as entityTypes from './entityTypes';
import Camera from '../camera/camera';
import * as Progress from 'react-native-progress';

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
			imageFileStreamId: '',
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

	setLogoId = (logoId) => {
	    console.log('IN SET LOGO ID')
		this.setState({logoId:logoId});
		this.setState ({cameraModalVisible:visible});
	};

	renderProgress = () => {
		if (this.props.isImageSaveStarted) {
			return ( <Progress.Circle size={50} indeterminate={true}/>)
		};
	};

    setEntitySelectedState = (selectedEntity) =>{
        this.setState({entityToAdd:selectedEntity});
        this.setState({isEntitySelected:true});
	};

    setContactTypeState = (contactType) =>{
        this.setState({contactType:contactType});
	};

    saveEntity = () => {
        this.props.addContact(this.state, this.props.imageFileStreamId);
        this.props.navigation.navigate('myProjects');
        this.resetScreen();
    };

	saveEntityWithLogo = () => {
		this.setState({ imageFileStreamId: this.props.imageFileStreamId}, () => {
			this.props.addContact(this.state, this.props.imageFileStreamId);
		});
		this.props.navigation.navigate('myProjects');
		this.resetScreen();
	};

    resetScreen = () => {
        this.setState({isEntitySelected:false});
        this.setState({entityToAdd:''});
        this.setState({contactType:''});
    };

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
                        {this.renderProgress()}
                        <Text style={styles.header}>Add a {this.state.entityToAdd}</Text>
                        {this.renderBusinessEntityFields()}
                        <View>
                            <Button title='Save' disabled={this.props.isImageSaveStarted} onPress={() => {this.saveEntityWithLogo()}}/>
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
                    source={{uri: 'http://127.0.0.1:8080/api/fileStream?fileStreamId=' + this.props.imageFileStreamId}}
                />
            )
        }
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

addEntity.defaultProps = {
    imageFileStreamId: '',
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

export default connect(mapStateToProps, mapDispatchToProps)(addEntity);
