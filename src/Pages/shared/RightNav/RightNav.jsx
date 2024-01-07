import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'
const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <br />
      <Button variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4 className="mb-2 mt-2">Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
            
      </div>
      
    </div>
  );
};

export default RightNav;
