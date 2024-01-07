import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
      .then()
      .catch (err => {
         console.log(err);
 
      });
    }


    return (
       <Container>
        
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
                <Link className='m-2 text-decoration-none text-dark' to= '/'>Home</Link>
                <Link className='m-2 text-decoration-none text-dark' to= '/'>About</Link>
                <Link className='m-2 text-decoration-none text-dark' to= '/'>Career</Link>
                        
            </Nav>
            <Nav>
              {
                user && <Nav.Link href="#deets">{<FaUserCircle style={{fontSize: '2.5rem'}}></FaUserCircle>}</Nav.Link>
              }
              
                
                  {
                    user?
                    <Button onClick={handleLogOut} variant="secondary" className='mt-2' size="md" active>Log Out </Button>:
                    <Link to = '/login'>
                    <Button variant="secondary" className='mt-2' size="md">Login</Button>
                    </Link>
                  }
             
                  
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
       </Container>
      
    );
};

export default NavigationBar;