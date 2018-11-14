import React, { Component } from 'react';
import './App.css';
import {Element,scroller} from 'react-scroll';
import Welcome from "./components/Welcome";
import products from "./data.json";
import GridGame from "./components/Grid";

let filteredProducts = products;
class App extends Component {
  constructor(props){
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Element name="home" className="element">
          <Welcome/>
        </Element>
        <Element name="games" className="element">
        <GridGame games={filteredProducts}/>
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
