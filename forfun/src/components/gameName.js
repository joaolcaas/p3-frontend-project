import React,{Component} from "react";


export default class GameName extends Component{
    render(){
        return(
            <div>
                {this.props.gameName}
            </div>
        );
    }
}