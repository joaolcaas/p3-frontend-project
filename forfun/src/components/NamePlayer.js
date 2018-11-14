import React,{Component} from "react";


export default class NamePlayer extends Component{
    render(){
        return(
            <div>
               <h3> {this.props.namePlayer} </h3>
            </div>
        );
    }
}