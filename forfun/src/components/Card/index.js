import React, { Component } from "react";
import './index.css'
import { Card, Image } from 'semantic-ui-react'

export default class CardGame extends Component{
  constructor(props) {
    super(props);
    console.log(props)
  }

  render(){
    return(
      <Card>
      <Image id='image' src='https://react.semantic-ui.com/images/avatar/large/matthew.png'/>
      <Card.Content>
    <Card.Header>{this.props.name}</Card.Header>
    <Card.Description>{this.props.playerName}</Card.Description>
  </Card.Content>
  </Card>
    );
  }
}

