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


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Home extends Component<Props> {
  static navigationOptions = {
      header: null
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Connecta - Black Atom</Title>
          </Body>
        </Header>
        <Content>
            <Button
              primary
              onPress={() => this.props.navigation.navigate('Employee')}>
              <Text> Vamos pra Outra Pagina </Text>
            </Button>
        </Content>
      </Container>
    );
  }
}
