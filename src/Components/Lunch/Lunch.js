import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import './Lunch.css'

const Lunch = (props) => {
    const {name, image, detail, price} = props.foodItems;
    return (
        <div className="foods">
            <Container>
                <CardDeck>
                    <Card  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image}/>
                    
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {detail};
                                <br/>
                                $ {price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    );
};

export default Lunch;