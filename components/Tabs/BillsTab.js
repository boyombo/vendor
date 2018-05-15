import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Title, Header, Button, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
export default class BillsTab extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Bills Payment',
       headerStyle: {
        backgroundColor: '#3F51B5',
      },
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <List>
          <ListItem
            icon
            onPress={() => {this.props.navigation.navigate('BillDetail', {'kind': 'Television'})}}
            >
              <Left>
                <Icon name="power" />
              </Left>
              <Body>
                <Text>Television</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem
              icon
              onPress={() => {this.props.navigation.navigate('BillDetail', {'kind': 'Electricity'})}}
              >
              <Left>
                <Icon name="flash" />
              </Left>
              <Body>
                <Text>Electricity</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem
              icon
              onPress={() => {this.props.navigation.navigate('BillDetail', {'kind': 'Travel'})}}
              >
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Travel</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem
              icon
              onPress={() => {this.props.navigation.navigate('BillDetail', {'kind': 'Internet'}); }}
            >
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>Internet</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
