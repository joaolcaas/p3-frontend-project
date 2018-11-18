import React, {Component} from 'react'
import {Grid, Col, Image} from 'react-bootstrap'
import './index.css'

class Footer extends Component {
    render() {
        return(
            <div>
                <Grid id="footerGrid">
                    <Col md={5}>
                        <h2 id="footerTitle">UFCG</h2>
                        <h2 id="footerTitle">Single page desenlvolvida para a disciplina de P3 ministrada pelo professor Matheus Gaudêncio</h2>

                    </Col>

                     <Col md={7}>
                        <h2 id="footerTitle">Contato Desenvolvedor</h2>
                        
                        <Col md={6}>
                        <h3 id="footerTitle">GitHub</h3>
                        <ul>
                            <li id="content-footer"><a href="https://github.com/joaolcaas" id="dev" > João Lucas</a></li>

                        </ul>
                        </Col>

                        <Col md={6}>
                        <h3 id="footerTitle">E-mail</h3>
                        <ul>
                            <li id="content-footer"><a href="mailto:joao.felipe@ccc.ufcg.edu.br" id="dev" > João Lucas</a></li>

                        </ul>
                        </Col>


                    
                    </Col>

                </Grid>
                <Grid id="gridFooterCop">
                    <Col md={12}>
                    <p id="footerCop"> {(new Date().getFullYear())} UFCG - Campina Grande </p>
                    </Col>
                </Grid>
                </div>
        )
    }
}

export default Footer
