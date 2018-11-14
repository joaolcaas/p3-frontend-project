import React,{Component} from "react";
import GameCard from "../Card/index";
import "./index.css"

export default class GameGrid extends Component{
   
    render(){
        return(
            <div className="row">
                {this.props.games.map(game=>{
                    return(
                        <article key = {game.id}>
                        <>
                        <GameCard props={game}/>
                        </>
                        </article>
                    )
                })}
            </div>
        );
    }
}