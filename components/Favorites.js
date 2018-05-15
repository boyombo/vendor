import React, { Component } from 'react'
import { Card, CardItem, Text, Icon, Button } from 'native-base';

export default class Favorites extends Component {
  render() {
    return (
        <Card>
        <CardItem header>
        <Button
            vertical transparent>
            <Icon name="person" />
            <Text>Me</Text>
          </Button>
          <Button
            vertical transparent>
            <Icon name="person" />
            <Text>Wifey</Text>
          </Button>
          <Button
            vertical transparent>
            <Icon name="person" />
            <Text>Mom</Text>
          </Button>
          <Button
            vertical transparent>
            <Icon name="add" />
            <Text>Add</Text>
          </Button>
        </CardItem>
 
     </Card>
    )
  }
}