import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Title, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Profile',
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
              <ImageBackground source={require('../../images/background.jpg')} style={{flex: 1, height: 200, width: null, justifyContent:"center", alignItems:"center"}}>

              <Title>Bayo</Title>
              <Title>bayokrapht@gmail.com</Title>
              <Title>08033412143</Title>

              </ImageBackground>
            </CardItem>
            <CardItem>
              <Left>
                
              </Left>
              <Body>
                
              </Body>
              <Right>
                <Button transparent
                    onPress={() => {this.props.navigation.navigate('EditProfile')}}
                  >
                  <Icon active name="create" />
                  <Text>edit</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="briefcase" />
              <Text>Wallet</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           <Card>
            <CardItem>
              <Icon active name="document" />
              <Text>Trans. History</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}