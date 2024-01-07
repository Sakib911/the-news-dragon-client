import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted,setAccepted] = useState(false);

    const handleRegister= event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
        .then ((result) => {

             console.log(result);
             form.reset();
         })
         .catch (err => {
             console.log(err);
         })
    }

    const handleAccepted = event => {

        setAccepted ( event.target.checked);

    }


    return (
        <Container className='mx-auto w-25 '>
            <h3>Please Log In</h3>
           <Form onSubmit={handleRegister}>
           <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Name" required/>
        
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        onClick={handleAccepted}
        type="checkbox"
         name='accept' 
         label={<>Accept <Link to='/terms'>terms and conditions</Link></>} />
         <Form.Text className='text-danger'>
      {
        !accepted ? "Approved Terms and condition to REGISTER":''
      }
      </Form.Text>
      </Form.Group>
      
      
      <Button variant="secondary" disabled = {!accepted} type="submit">
        Register
      </Button>
      
      
      <br />
      <Form.Text className='text-secondary'>
     Already Have An Account? <Link to='/login' className='text-Success text-decoration-none'>Login</Link>
      </Form.Text>
      <Form.Text className='text-success'>

      </Form.Text>
      <Form.Text className='text-danger'>

      </Form.Text>
    </Form>
        </Container>
    );
};

export default Register;