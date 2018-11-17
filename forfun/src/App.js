import React, { Component } from 'react';
import './App.css';
import {Element,scroller} from 'react-scroll';
import Welcome from "./components/Welcome";
import products from "./data.json";
import GridGame from "./components/Grid";
import NavBar from "./components/NavBar";

let filteredProducts = products;

class App extends Component {
  constructor(props){
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }
  render() {
    return (
      <div className="App">
        <NavBar scrollTo={this.scrollTo}/>
        <Element name="home" className="element">
           <Welcome/>
        </Element>
        <Element name="games" className="element">
        {false && <GridGame games={filteredProducts}/>}
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
