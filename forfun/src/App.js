import React, { Component } from 'react';
import './App.css';
import {Element,scroller} from 'react-scroll';
import Welcome from "./components/Welcome";
import GridGame from "./components/Grid";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
    this.postGame = this.postGame.bind(this);

    this.state = {
      show:false,
      games:[],
    };
  
  }
  postGame(game){
    axios.post(`http://localhost:3000/game/?name=` + game.name +'&&urlPhoto=' + game.photo, { 
     })
      .then(res => {
        this.setState(prevState=>({
          games: [...prevState.games, res.data]
        }));
        console.log(res);
        console.log(res.data);
      })
  }
  componentDidMount(){
    axios.get('http://localhost:3000/game')
    .then(res=>{
        const gamesCards = res.data
        this.setState({games:gamesCards})
    })
    .catch(error=>{
        return(error)
    })
}

  
  render() {
    return (
      <div className="App">
        <NavBar scrollTo={this.scrollTo} postGame={this.postGame}/>
        <Element name="home" className="element">
           <Welcome/>
        </Element>
        <Element name="games" className="element">
        <h2>JOGOS</h2>
          <GridGame games={this.state.games}/>
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
