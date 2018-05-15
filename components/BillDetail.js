import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Button, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Title } from 'native-base';
export default class BillDetail extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Bill Detail',
       headerStyle: {
        backgroundColor: '#3F51B5',
      },
    }
  }
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    const kind = navigation.getParam('kind', '')
    return (
      <Container>
        <Header>
          <Left>
          <Title>{kind}</Title>
          </Left>
        </Header>
        <Content>
          <List>
          <ListItem
            icon
            onPress={() => {console.log('pressed')}}
            >
              <Left>
                <Icon name="power" />
              </Left>
              <Body>
                <Text>Item1</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="power" />
              </Left>
              <Body>
                <Text>Item 2</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="power" />
              </Left>
              <Body>
                <Text>Item 3</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="power" />
              </Left>
              <Body>
                <Text>Item 4</Text>
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
