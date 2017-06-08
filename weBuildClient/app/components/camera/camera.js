import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import styles from './styles'
import Camera from 'react-native-camera';


export default class WeBuildCamera extends React.Component{
    constructor (props){
        super(props)
    }

    takePicture () {
        console.log('PHOTOS!!')
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => console.log('DATA',data))
            .catch(err => console.error(err));
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
