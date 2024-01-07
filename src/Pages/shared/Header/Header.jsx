import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Header = () => {

  
  var now = moment().format("dddd, MMMM D, YYYY");
  return (
    <div>
      <div>
        <h1 className="text-center bg-dark text-white mb-2 pb-3">A newspaper Website by Md. Sayem Hossen Sakib</h1>
      </div>
      <Container>
      
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{now}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee
          delay={3}
          speed={100}
          pauseOnHover={true}
          className="text-danger"
        >
          I can be a React component, multiple React components, or just some
          text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          dicta, ratione nam minus vitae officiis repellat .
        </Marquee>
      </div>
      
    </Container>
    </div>
  );
};

export default Header;
