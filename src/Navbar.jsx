// src/Navbar.jsx
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './index.css';

const NavigationBar = () => {

    const [activeKey, setActiveKey] = useState('#home');

    return (
        <Navbar bg="primary" variant="dark" expand="sm" style={{ width: "90%", top:20}}>
            <Container>
                <Navbar.Brand href="/">ДК</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav className="me-auto"> */}
                    <Nav className="me-auto" activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
                        <LinkContainer to="/">
                            <Nav.Link eventKey="#home">Главная</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/logs">
                            <Nav.Link eventKey="#logs">Журнал</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/settings">
                            <Nav.Link eventKey="#settings">Настройки</Nav.Link>
                        </LinkContainer>
                        {/* <Nav.Link href="#home">Главная</Nav.Link> */}
                        {/* <Nav.Link href="#logs">Журнал</Nav.Link> */}
                        {/* <Nav.Link href="#settings">Настройки</Nav.Link> */}
                        {/* <Nav.Link href="#support">Поддержка</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
