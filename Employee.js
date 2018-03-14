/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Employee extends Component {
  static navigationOptions = {
      header: null
  }
  
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button 
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body>
            <Title>Employee</Title>
          </Body>
        </Header>
        <Content>
            <Text> Isso foi o que eu pedi </Text>
        </Content>
      </Container>
    );
  }
}