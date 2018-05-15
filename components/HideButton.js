import React, { Component } from 'react'
import { Content, Container, Text, Icon, Button } from 'native-base';

export default class HideButton extends Component {

  render() {
  	if (this.props.hidden === true) {
  		return (
  			<Text></Text>
  		)
  	} else {
  		return (
  			
  			<Button iconLeft light>
  				<Text>Data Plans</Text>
  				<Icon name="list" />
  			</Button>
  		)
  	}
  }
}