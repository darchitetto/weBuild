import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import styles from './styles'
import Camera from 'react-native-camera';
import reactNativeFetchBlob from 'react-native-fetch-blob';


export default class WeBuildCamera extends React.Component{
    constructor (props){
        super(props)
    }

    takePicture () {
        console.log('PHOTOS!!')
        const options = {target: Camera.constants.CaptureTarget.disk,};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => {
                console.log('DATA',data);
                reactNativeFetchBlob.fs.readFile(data.path, 'base64')
                    .then((base64data) => {
                        let base64Image = `data:image/jpeg;base64,${base64data}`;
                        this.saveImage(base64Image);
                    })
            })

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


    saveImage (base64Image) {
        console.log('saving Image')
        fetch('http://127.0.0.1:8080/api/fileStream', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image: base64Image
            })
        }).then((responseData) => {
            console.log('saveImage', responseData)
        }).catch((err) => {
            console.log('saveImage Error: ',err)
        });
    };
}
