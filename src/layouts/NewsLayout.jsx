import React from 'react';
import Header from '../Pages/shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../Pages/shared/RightNav/RightNav';
import Footer from '../Pages/shared/Footer/Footer';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
                <Container>
        <Row>
          <Col lg={9} >
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

export default NewsLayout;