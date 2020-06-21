import React, { useState } from 'react';
import { Card, Nav, Button, Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData';
import Lunch from '../Lunch/Lunch';

const Food = () => {
    const first6 = fakeData.slice(0,6);
    const [foods, setFoods] = useState(first6);
    console.log(foods);
    return (
        <div>
            <h1>Food section</h1>
            <Container>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#disabled" disabled>
                        Disabled
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Row>
                    {
                        foods.map(food => <Lunch foodItems ={food}></Lunch>)
                    }

                    </Row>

                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Container>
        </div>
    );
};

export default Food;