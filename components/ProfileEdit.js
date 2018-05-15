import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Title, Header, Content, Card, CardItem, Thumbnail, Input, Text, Button, Form, Item, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Edit Profile',
       headerStyle: {
        backgroundColor: '#3F51B5',
      },
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <Card style={{marginLeft:0,marginRight:0, marginTop: 0}}>
            <CardItem cardBody>
              <ImageBackground source={require('../images/background.jpg')} style={{flex: 1, height: 50, width: null, justifyContent:"center", alignItems:"center"}}>

              </ImageBackground>
            </CardItem>
            <CardItem>
              <Form style={{marginLeft:0,marginRight:0, marginTop: 0, width: "100%"}}>
                <Item>
                    <Icon active name='person' />
                    <Input placeholder='Name' />
                </Item>
                <Item>
                    <Icon active name='call' />
                    <Input placeholder='Phone Number' keyboardType="numeric" />
                </Item>
                <Item>
                    <Icon active name='mail-open' />
                    <Input placeholder='Email' />
                </Item>
                <Item>
                  <Button full><Text>Save</Text></Button>
                </Item>
              </Form>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}