import  React,{Component} from "react";
import {Button, Modal,Form,FormGroup,ControlLabel,FormControl} from 'react-bootstrap'

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="modal-container" style={{ height: 200,paddingTop:20}}>
        <Button
          bsStyle="Button"
          bsSize="large"
          onClick={() => this.setState({ show: true })}>
          Entrar no ForFun
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              LOGIN
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form horizontal>
          <FormGroup controlId="formInlineEmail">
          <ControlLabel>Email</ControlLabel>{' '}
          <FormControl type="email" placeholder="joao.lucas@cesar.com"/>
          </FormGroup>{' '}
          <FormGroup controlId="password">
          <ControlLabel>Senha</ControlLabel>{' '}
          <FormControl type="password"/>
            </FormGroup>{' '}
          <Button type="submit">LOGAR</Button>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Cadastrar-se</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default Login;