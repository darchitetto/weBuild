import React, { Component } from 'react';
import  {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../actions';
import {
    Text,
    View,
    Button
} from 'react-native';
import styles from './styles'
import Camera from 'react-native-camera';
import reactNativeFetchBlob from 'react-native-fetch-blob';
import * as fileStreamTypes from '../../lib/fileStreamTypes'

class camera extends Component{
    constructor (props){
        super(props);
    }

    takePicture () {
        this.props.imageSaveStarted();
        const fileName = 'photo.jpg'; //TODO Name Please!!
        const options = {target: Camera.constants.CaptureTarget.disk,};
        this.camera.capture({metadata: options})
            .then((data) => {
                console.log('DATA',data);
                reactNativeFetchBlob.fs.readFile(data.path, 'base64')
                    .then((base64data) => {
                        let base64Image = `data:image/jpeg;base64,${base64data}`;
                        this.props.addImage(base64Image,fileName);
					})
            })
            .catch(err => console.error(err));
        this.props.setCameraModalVisible(false);
    }

    render () {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {this.camera = cam;}}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Button title={this.props.captureButtonTitle} onPress={this.takePicture.bind(this)}/>
                </Camera>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps (state){
	return{
		imageFileStreamId: state.image.imageFileStreamId,
	}
}

export default connect((mapStateToProps), mapDispatchToProps)(camera);