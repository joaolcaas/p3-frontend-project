import React from "react";
import './index.css'
import { Card, Image } from 'semantic-ui-react'

const CardGame = ({ game }) => 
  <Card>
    <Image className='image' src={game.urlPhoto}/>
    <Card.Content>
    <Card.Header className="header">{game.name}</Card.Header>
  </Card.Content>
</Card>;


export default CardGame;