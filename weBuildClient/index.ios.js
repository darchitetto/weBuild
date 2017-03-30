//import builder from './middleware/builder';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

const REQUEST_URL = 'http://localhost:8080/api/builders';

export default class weBuildClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    loaded: true,
                });
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderBuilder}
                style={styles.listView}
            />
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading builders...
                </Text>
            </View>
        );
    }

    renderBuilder(builder) {
        return (
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{builder.name}</Text>
                <Text style={styles.id}>{builder.builderId}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    id: {
        textAlign: 'center',
    },
});

AppRegistry.registerComponent('weBuildClient', () => weBuildClient);
