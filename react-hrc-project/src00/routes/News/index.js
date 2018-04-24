import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actionCeators/actionCeators'

import './index.css'
import NewsContent from '../../components/NewsContent'


const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav activeHref >
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

class News extends Component {
    render() {
        return (
            <div>
              <NewsContent />
            </div>
        );
    }
}

export default News;



