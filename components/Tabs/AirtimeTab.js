import React, { Component } from 'react'
import Favorites from '../Favorites';
import HideButton from '../HideButton';

import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { Picker, Form, Item, Input, Segment, Icon, Container, Header, Left, Body, Right, Title, Content, Card, CardItem, Text, Button } from 'native-base';    

export default class AirtimeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {seg: 1, selected: "key0"};
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
        <Container>
        <Header>
          <Left>
            <Title>Airtime</Title>
          </Left>
          <Right />
        </Header>
        <Content>
        <Favorites />
         <Card>
         <Segment>
          <Button first
          active={this.state.seg === 1 ? true : false}
          onPress={() => this.setState({ seg: 1 })}>
            <Text>Airtime</Text>
          </Button>
         
          <Button last
          active={this.state.seg === 2 ? true : false}
          onPress={() => this.setState({ seg: 2 })}>
            <Text>Data</Text>
          </Button>
        </Segment>
        <KeyboardAvoidingView>

        <Form>
            <Item>
                <Icon active name='call' />
                <Input placeholder='Phone Number' keyboardType="numeric" />
            </Item>
            <Item>
                <Icon active name='wifi' />
                <Picker
              mode="dropdown"
              androidHeader="Select Network"
              header="Select Network"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="MTN" value="key0" />
              <Picker.Item label="Airtel" value="key1" />
              <Picker.Item label="Glo" value="key2" />
              <Picker.Item label="9 mobile" value="key3" />
            </Picker>
            </Item>
            <Item>
                <Icon active name='cash' />
                <Input placeholder='Amount' keyboardType="numeric" />
            </Item>
            <Item>
                <HideButton
                  hidden={this.state.seg === 1 ? true : false}
                />
            </Item>
            <Item>
              
            </Item>
        </Form>
          
        </KeyboardAvoidingView>
        <Button full>
                <Text>Continue</Text>
              </Button>
         </Card>
         </Content>
      </Container>
    )
  }
}
