import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';
import styles from './styles'
import { Container, Content, Form, Item, Input,Label} from 'native-base';

export default class addJob extends React.Component {
    static navigationOptions = {
        title: 'Add a Job',
    };
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item fixedLabel>
                            <Label>Name</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label># of Lots</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label>Township</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label>Project Manager</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label>Superintendent</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label>Site Manager</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel>
                            <Label>Start Date</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}
