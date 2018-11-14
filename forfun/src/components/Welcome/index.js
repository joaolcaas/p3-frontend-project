import React, {Component} from 'react'
import './index.css'
import {Grid} from 'react-bootstrap'

class Welcome extends Component{
    render() {
        return(
       <Grid id="gridWelcome">
            <h1 id="welcomeTitle">FORFUN </h1>
            <h2 id="welcomeSubTitle">   Um serviço web que vai ajudar a juntar jogadores que jogam um mesmo game </h2>
    
        </Grid>
        )
    }
}

export default Welcome