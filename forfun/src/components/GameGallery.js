import React,{Component} from "react";
import GameName from "./GameName";
import NamePlayer from "./NamePlayer";
import MatchButton from "./MatchButton";


export default class GameSummary extends Component{
    render(){
        return(
            <div className="gallery">
                {this.props.games.map(game=>{
                    return(
                        <article key={game.id} className="summary">
                        <>
                        <GameName name={game.name}/>
                        <NamePlayer namePlayer={game.playerName}/>
                        <MatchButton></MatchButton>
                        </>
                        </article>
                    );
                })}
            </div>
        );
    }
}