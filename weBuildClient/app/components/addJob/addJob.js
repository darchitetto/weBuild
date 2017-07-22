import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../actions/'
import Schedule from '../schedule/schedule'
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

class addJob extends React.Component {
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

    //TODO: How to make the < button work
    // static navigationOptions = {
    //     title: 'Add a Job',
    // };

    onValueChange (value) {
        this.setState({
            category : value
        });
    };

    saveJob = () => {
        this.props.addJob(this.state);
        this.props.navigation.navigate('myProjects');
    };

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Button
                            onPress={() => this.props.navigation.navigate('myProjects')}
                            title="Go back from this HomeScreen">
                            <Text>Back</Text>
                        </Button>
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
                            <Label>Category</Label>
                            <Input onChangeText={(text) => this.setState({category:text})} />
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

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

function mapStateToProps (state){
    return{
        addJob: state.addJob,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addJob);
