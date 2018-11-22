import React from "react";
import './index.css'
import { Card, Image } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'

const CardGame = ({ game }) => 
  <Card>
    <Image className='image' src='https://react.semantic-ui.com/images/avatar/large/matthew.png'/>
    <Card.Content>
    <Card.Header className="header">{game.name}</Card.Header>
    <Card.Meta>
        <span className='date'>Joined in 2015</span>
    </Card.Meta>
  </Card.Content>
  <Button animated>
  <Button.Content visible>Next</Button.Content>
    <Button.Content hidden>
      <Icon name='arrow right' />
    </Button.Content>
</Button>
</Card>;


export default CardGame;