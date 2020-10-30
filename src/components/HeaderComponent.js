import React, {Component} from 'react';
import {Navbar, NavbarBrand,Jumbotron,NavItem,Collapse,NavbarToggler,Nav,Modal,ModalBody,ModalHeader, Form, Button, FormGroup, Label, Input, Media} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props)
        this.toggleNav=this.toggleNav.bind(this);
        this.state={
            isNavOpen:false,
            isModalOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }

    toggleModal(){
        this.setState({isModalOpen:!this.state.isModalOpen})
    }

    toggleNav(){
        this.setState({isNavOpen:!this.state.isNavOpen})
    }

    handleLogin(event){
        alert("Username :" +this.username.value +" Password:" +this.password.value+" Remember:"+this.remember.checked);
        event.preventDefault();
    }
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/resume"><span className="fa fa-info fa-lg"></span>Resume</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/project"><span className="fa fa-list fa-lg"></span>Projects</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact"><span className="fa fa-address-card fa-lg"></span>Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-4">
                                <img src="assets/images/shanmukha.jpeg" alt="Shanmukha Ram" className="shanmukh" height="300" width="300"></img>
                            </div>
                            <div className="col-12 col-sm-8">
                                <h1>Peri Shanmukha Ram</h1>
                                <p>Hi! I’m Shanmukha, I’m in my senior year(UnderGrad) at vellore institute of technology-AP, studying Mechanical Engineering.To satiate my curiosity and love for further research and constant learning ,i have decided to pursue a Master's program in Mechanical Engineering and get involved in higher studies in this area </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password=input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember=input}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
          </React.Fragment>
        );
    }
}

export default Header