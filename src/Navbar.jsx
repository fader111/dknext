// src/Navbar.jsx
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './index.css';

// const CheckboxGroup = () => (
//     <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
//       <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
//       <label className="btn btn-outline-primary" htmlFor="btncheck1">Неисправности</label>
  
//       <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
//       <label className="btn btn-outline-primary" htmlFor="btncheck2">Предупреждения</label>
  
//       <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
//       <label className="btn btn-outline-primary" htmlFor="btncheck3">События</label>
//     </div>
//   );

  const NavigationBar = () => {

    const [activeKey, setActiveKey] = useState('#home');

    return (
        <Navbar bg="primary" variant="dark" expand="sm" style={{ width: "100%", top:20}}>
        {/* <Navbar bg="primary" variant="dark" expand="sm" style={{ alignContent: "center", top:20}}> */}
            <Container>
                <Navbar.Brand href="/">ДК</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav className="me-auto"> */}
                    <Nav className="me-auto" activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)}>
                        <LinkContainer to="/">
                            <Nav.Link eventKey="#home">Главная</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/events">
                            <Nav.Link eventKey="#events">Журнал</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/control">
                            <Nav.Link eventKey="#control">Управление</Nav.Link>
                        </LinkContainer>                        
                        <LinkContainer to="/settings">
                            <Nav.Link eventKey="#settings">Настройки</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    {/* {activeKey === '#events' && <CheckboxGroup />} */}
                    {/* {console.log('Active Key:', activeKey)} Debugging line */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
