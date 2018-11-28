import React, { Component } from 'react'
import { Navbar, Nav, NavItem,Image } from 'react-bootstrap'
import './index.css'
import FormGame from "../FormGame";

class NavBar extends Component {

    render() {  

        return (
            <div>
                <Navbar toggleNavKey={0} inverse collapseOnSelect fixedTop id='navbar'>
                    <Navbar.Collapse>
                        <Nav pullRight>
                         <NavItem onClick={() => this.props.scrollTo('home')} href="#" >
                                <Image style={ { position: 'absolute', left: -700, top: 0 } } src="controle.png" height="70px" width="110px" alt="text here" />
                            </NavItem>
                            <NavItem onClick={() => this.props.scrollTo('games')} href="#" id='navItem'>
                                Games
                            </NavItem>
                            <NavItem onClick={() => this.props.scrollTo('login')} href="#" id='navItem'>
                                Login
                            </NavItem>
                            <NavItem onClick={() => this.props.scrollTo('login')} href="#" id='navItem'>
                                Informações
                            </NavItem>
                            <NavItem  href="#" id='navItem'>
                                <FormGame postGame={this.props.postGame}/>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default NavBar