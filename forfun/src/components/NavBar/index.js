import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './index.css'

class NavBar extends Component {

    render() {

        return (
            <div>
                <Navbar  inverse collapseOnSelect fixedTop id='navbar'>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem onClick={() => this.props.scrollTo('home')} href="#" id='navItem'>
                                Home
                            </NavItem>
                            <NavItem onClick={() => this.props.scrollTo('games')} href="#" id='navItem'>
                                Games
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default NavBar