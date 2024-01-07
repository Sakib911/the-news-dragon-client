import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const [userMail, setUserMail] = useState(null);
    const navigate = useNavigate();
    const {logInUser} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/category/0';

    const handleLogin= event => {
         setError('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password)
        .then (result => {
            const loggedUser = result.user
            setUserMail(loggedUser.email);
            console.log(loggedUser);
            navigate(from , {replace: true})
            form.reset();
        })
        .catch (err => {
             setError(err.message);
             console.log(err);
         })
        
    }
    return (
        <Container className='mx-auto w-25 '>
            <h3>Please Log In</h3>
           <Form onSubmit={handleLogin} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text className='text-secondary'>
     Don't Have An Account? <Link to='/register' className='text-danger text-decoration-none'>Register</Link>
      </Form.Text>
      <br />
      <Form.Text className='text-success'>
        {userMail}
      </Form.Text>
      <br />
      <Form.Text className='text-danger'>
      {error}
      </Form.Text>
    </Form>
        </Container>
    );
};

export default Login;