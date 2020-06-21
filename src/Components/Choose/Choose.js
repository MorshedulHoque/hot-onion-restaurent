import React from 'react';
import { CardDeck, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from '../../hot-onion-restaurent-resources-master/Image/adult-blur-blurred-background-687824.png';
import Image2 from '../../hot-onion-restaurent-resources-master/Image/chef-cook-food-33614.png';
import Image3 from '../../hot-onion-restaurent-resources-master/Image/brooke-lark-158019-unsplash.png';
import Icon1 from '../../hot-onion-restaurent-resources-master/ICON/Group 204.png';
import Icon2 from '../../hot-onion-restaurent-resources-master/ICON/Group 1133.png';
import Icon3 from '../../hot-onion-restaurent-resources-master/ICON/Group 245.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Choose.css';

const Choose = () => {
    return (
        <div>
            <Container>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  
                  <div className="box">
                      <div>
                        <img src={Icon1} alt=""/>
                      </div>
                      <div className="box-text">
                        <Card.Title>Fast Delevery</Card.Title>
                        <Card.Text>
                          Keep your systems in sync with automated web hook based notifications each time link is paind and how we dream about our future.
                        </Card.Text>
                        <a href="#">See more  <FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                      </div>
                  </div>
                </Card.Body>

              </Card>
              <Card>
                <Card.Img variant="top" src={Image2} />
                <Card.Body>  <div className="box">
                      <div>
                        <img src={Icon2} alt=""/>
                      </div>
                      <div className="box-text">
                        <Card.Title>A Good Auto Responder</Card.Title>
                        <Card.Text>
                          Keep your systems in sync with automated web hook based notifications each time link is paind and how we dream about our future.
                        </Card.Text>
                        <a href="#">See more  <FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                      </div>
                  </div>

                  
                </Card.Body>

              </Card>
              <Card>
                <Card.Img variant="top" src={Image3} />
                <Card.Body>

                <div className="box">
                      <div>
                        <img src={Icon3} alt=""/>
                      </div>
                      <div className="box-text">
                        <Card.Title>Home Delivery</Card.Title>
                          <Card.Text>
                            Keep your systems in sync with automated web hook based notifications each time link is paind and how we dream about our future.
                          </Card.Text>
                          <a href="#">See more  <FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                      </div>
                  </div>

                  
                </Card.Body>
              </Card>
            </CardDeck>
            </Container>
        </div>
    );
};

export default Choose;