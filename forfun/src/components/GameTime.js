import React,{Component} from "react";


export default class gameTime extends Component{
    render(){
        return(
            <div>
                {this.props.gameTime}
            </div>
        );
    }
}