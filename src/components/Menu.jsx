import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

class Menu extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Router Test</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#/home">Início</Nav.Link>
                    <Nav.Link href="#/user">Users</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Digite..." className="mr-sm-2" />
                    <Button variant="outline-info">Procurar</Button>
                </Form>
            </Navbar>
        )
    }
}
export default Menu