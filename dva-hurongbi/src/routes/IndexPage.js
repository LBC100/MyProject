import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, ButtonToolbar, Carousel } from 'react-bootstrap';

const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const buttonsInstance = (
  <ButtonToolbar>
    {/* 标准按钮 */}
    <Button>Default</Button>

    {/* 提供重要视觉感知及标识重要操作的按钮 */}
    <Button bsStyle="primary">Primary</Button>

    {/* 指示成功或正面操作按钮 */}
    <Button bsStyle="success">Success</Button>

    {/* 提供上下文帮助的提示信息按钮 */}
    <Button bsStyle="info">Info</Button>

    {/* 提醒操作需要小心使用 */}
    <Button bsStyle="warning">Warning</Button>

    {/* 提醒操作可能会导致危险或造成负面影响 */}
    <Button bsStyle="danger">Danger</Button>

    {/* 像一个链接但有按钮的操作行为 */}
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>
);

const carouselInstance = (
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={ require('../img/bar1.jpg') } />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={ require('../img/bar2.jpg') }/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={ require('../img/bar3.jpg') }/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);


function IndexPage() {
  return (
    <div className={styles.normal}>
      <Button>234</Button>
      {navbarInstance}
      {buttonsInstance}
      {carouselInstance}
      <Button bsStyle="primary">Primary</Button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
