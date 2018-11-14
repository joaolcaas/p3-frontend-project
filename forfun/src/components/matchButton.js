import React from 'react'
import { Button, Icon } from 'semantic-ui-react'


const handleClick = () =>{
    console.log("cliquei no botão")
}
const matchButton = () => (
  <div>
      <Button animated cor ='red' onCick={handleClick}>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
  </div>
)

export default matchButton