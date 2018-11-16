import React from 'react'
import { Button, Input, Form } from 'semantic-ui-react'

const LoginForm = () => (
  <Form>
    <Form.Field>
      <label className='button'>Email</label>
      <Input type="email" placeholder="Email" />
    </Form.Field>
    <Form.Field>
    <label>Enter Password</label>
      <Input type='password' placeholder="Senha"/>
    </Form.Field>
    <Button className='button'>Submit</Button>
  </Form>
)

export default LoginForm