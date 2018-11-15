import React,{Component} from "react";
import GameCard from "../Card/index";
import "./index.css"


export default class GameGrid extends Component{
    render(){
        const { games } = this.props;
        return(
            <div className="row" id="gridGrid">
                {games && games.map(game=>{
                    return(
                        <article key = {game.id}>
                        <>
                        <GameCard game={game}/>
                        </>
                        </article>
                    )
                })}
            </div>
        );
    }
}