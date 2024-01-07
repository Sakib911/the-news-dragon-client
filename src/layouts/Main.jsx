import React from "react";
import Header from "../Pages/shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Pages/shared/LeftNav/LeftNav";
import RightNav from "../Pages/shared/RightNav/RightNav";
import NavigationBar from "../Pages/shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
       
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6} >
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
