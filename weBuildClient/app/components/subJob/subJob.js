import * as Progress from 'react-native-progress';
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    ListView,
    Button
} from 'react-native';
import styles from './styles'

export default class subTask extends Component{
    constructor (){
        super();
    }

    render(){
        return (
            <View>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <View style={[styles.column, styles.subJob]}>
                            <View style={styles.row}>
                                <Text style={styles.topSubRow}>{this.props.data.category}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.middleSubRow}>Contractor: {this.props.data.contractor}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.bottomSubRow} >Start Date: {this.props.data.startDate}</Text>
                                <Text style={styles.bottomSubRow} >Duration: {this.props.data.duration}  {this.props.data.durationType}</Text>
                                <Progress.Bar style={styles.progress} progress={.40} width={50} height={6} />
                            </View>
                        </View>
                        <View style={[styles.column, styles.settings]}>
                            <Button title=':' onPress={this.toggleSettings}/>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    toggleSettings = () =>{
        this.setState({
            settings: !this.state.settings
        });
    }
}

AppRegistry.registerComponent('subJob', () => subJob);

