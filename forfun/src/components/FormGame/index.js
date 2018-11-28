import  React,{Component} from "react";
import {Button, Modal,Form,FormGroup,ControlLabel,FormControl} from 'react-bootstrap'
import axios from 'axios';

class FormGame extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      name:'',
      photo:''
    };
  }

  nameChange = event =>{
    this.setState({name: event.target.value});
  }
  
  photoChange = event =>{
    this.setState({photo: event.target.value});
  }

  handleSubmit = event => {
    window.location.reload()
    this.handleHide()
    event.preventDefault();

    const user = {
      name: this.state.name,
      photo:this.state.photo
    };

    axios.post(`http://localhost:3000/game/?name=` + user.name +'&&urlPhoto=' + user.photo, { 
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  
  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="modal-container" style={{ height: 50}}>
        <Button
          bsStyle="Button"
          bsSize="large"
          onClick={() => this.setState({ show: true })}>
          Adicionar novo game
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              GAME
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form horizontal>
          <FormGroup controlId="formInlineNome">
          <ControlLabel>NOME</ControlLabel>{' '}
          <FormControl placeholder="Dota" onChange={this.nameChange}/>
            </FormGroup>{' '}
          <FormGroup controlId="formInlineNome">
          <ControlLabel>URL FOTO</ControlLabel>{' '}
          <FormControl placeholder="www.photo.com" onChange={this.photoChange}/>
            </FormGroup>{' '}
          <Button type="submit" onClick={this.handleSubmit} >Adicionar</Button>
</Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}


export default FormGame;