import React from 'react';
import Logo from '../../hot-onion-restaurent-resources-master/logo.png';
import './Footer.css';
import { Row, Container, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footerSection">
            <Container>
            <Row>
                <Col sm={7}>
                    <img  src={Logo} />
                </Col>
                <Col>
                <ul >
                <li>About Online Food</li>
                <li>Read our blog</li>
                <li>Sign up to delivery</li>
                <li>Add your resturent</li>
                </ul>
                </Col>
                <Col>
                <ul>
                <li>Get help</li>
                <li>Read FAQs</li>
                <li>View all cities</li>
                <li>Resturents near me</li>
            </ul>
                </Col>

            </Row>
            <br/>
            <br/>
            <Row cla>
                <Col sm={8} className="copyrightSection">
                    <p><small>Copyright ©2020 Online food</small></p>
                </Col>
                <Col>
                    <p>Privacy Policy</p>
                </Col>
                <Col>
                    <p>Terms of use</p>
                </Col>
                <Col>
                    <p>Pricing</p>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Footer;