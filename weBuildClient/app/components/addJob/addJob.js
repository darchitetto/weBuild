import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
} from 'react-native';
import styles from './styles'
import {Container,
        Content,
        Form,
        Item,
        Input,
        Label,
        Picker,
        Button,
        Icon} from 'native-base';

const Save_URL = 'http://localhost:8080/api/jobs';

export default class addJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            name: '',
            contractor: '',
            duration: '',
            category: 'outside',
            startDate: '',
            jobNumber: '',
        }
    };

    static navigationOptions = {
        title: 'Add a Job',
    };

    onValueChange (value: string) {
        this.setState({
            category : value
        });
    };

    saveJob = () => {
        fetch(Save_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                contractor: this.state.contractor,
                duration: this.state.duration,
                category: this.state.category,
                startDate: this.state.startDate,
                jobNumber: this.state.jobNumber,
            })
        });
        this.props.navigation.navigate('myProjects');
    };

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label >Name</Label>
                            <Input onChangeText={(text) => this.setState({name:text})} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Contractor</Label>
                            <Input onChangeText={(text) => this.setState({contractor:text})} />
                        </Item>

                        <Item stackedLabel>
                            <Label>Duration</Label>
                            <Input onChangeText={(text) => this.setState({duration:text})} />
                        </Item>
                        <Item stackedLabel>
                            <Label >Category</Label>
                            <Picker
                                supportedOrientations={['portrait','landscape']}
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.category}
                                onValueChange={this.onValueChange.bind(this)}>
                                <Item label="Outside" value="outside" />
                                <Item label="Inside" value="inside" />
                                <Item label="Garage" value="garage" />
                                <Item label="Landscape" value="landscape" />
                            </Picker>
                        </Item>
                        <Item stackedLabel>
                            <Label>Start Date</Label>
                            <Input onChangeText={(text) => this.setState({startDate:text})} />
                        </Item>
                        <Item stackedLabel>
                            <Label>Job Number</Label>
                            <Input onChangeText={(text) => this.setState({jobNumber:text})} />
                        </Item>
                        <View style={styles.button}>
                            <Button iconLeft primary block onPress={this.saveJob}>
                                <Icon name='rainy' />
                                <Text>Save Job</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}
