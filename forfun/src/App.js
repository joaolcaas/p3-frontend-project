import React, { Component } from 'react';
import './App.css';
import {Element,scroller} from 'react-scroll';
import Welcome from "./components/Welcome";
import GridGame from "./components/Grid";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props){
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose= this.handleClose.bind(this);
    
    this.state = {
      show:false
    };
  
  }
  handleShow(){
    this.setState({show:true});
  }
  handleClose(){
    this.setState({show:false});
  }
  
  render() {
    return (
      <div className="App">
        <NavBar scrollTo={this.scrollTo}/>
        <Element name="home" className="element">
           <Welcome/>
        </Element>
        <Element name="games" className="element">
        <h2>JOGOS</h2>
          <GridGame games/>
        </Element>
        <Element name="buttons">
        </Element>
        <Element name="login" className="element">
          <Login/>
        </Element>
        <Element name ='footer' className="element">
          <Footer/>
        </Element>
      </div>
    );
  }
  scrollTo(elementName) {
    scroller.scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -40
    })
  }


}

export default App;
