import React,{Component} from "react";
import { Grid } from "semantic-ui-react";
import GameCard from "../Card/index";
import "./index.css"


export default class GameGrid extends Component{
   
    render(){
        const { games } = this.props;
        return(
            games.length > 0 ? <Grid divided id='gridGrid'>
                {games.map(game=>{
                    return(
                        <article key = {game.id}>
                        <>
                        <GameCard game={game}/>
                        </>
                        </article>
                    )
                })}
            </Grid> 
            : 
            <div>
               NÃO EXISTEM JOGOS CADASTRADOS
            </div>
        );
    }
}