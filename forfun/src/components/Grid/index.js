import React,{Component} from "react";
import { Grid } from "semantic-ui-react";
import GameCard from "../Card/index";
import "./index.css"
import axios from 'axios';


export default class GameGrid extends Component{

    state = {
        gamesCards:[]
    }

    componentDidMount(){
        axios.get('http://localhost:3000/game')
        .then(res=>{
            const gamesCards = res.data
            this.setState({gamesCards})
            console.log(gamesCards);
        })
    }

    render(){
        return(
            <Grid divided id='gridGrid'>
                {this.state.gamesCards.map(game=>{
                    return(
                        <article key = {game.id}>
                        <>
                        <GameCard game={game}/>
                        </>
                        </article>
                    )
                })}
            </Grid>
        );
    }
}