import React from 'react';
import {Container, Button, Row, Col, Card} from 'react-bootstrap'
import './Contact.css';

function ContactUs(props) {
        return (
                <div className = "contact"> 
                <Container style={{margin: 'auto', width: '80%'}}>
                        <Row style={{width:'100%', margin:'auto'}}>
                                <h1 style={{color:'black', margin: 'auto', fontStyle: 'italic'}}>Feel Free To Talk To Our Developers</h1>
                        </Row>
                                <hr></hr>
                        <Row style={{width:'100%', margin:'auto'}}>
                                <Col md={4}>
                                        <Card style={{margin: '1em' }}>
                                                <Card.Body>
                                                <Card.Title>Chaturya Challa</Card.Title>
                                                <Card.Text>
                                                 Developer
                                                </Card.Text>
                                                <Card.Link><Button variant="primary" href="https://linkedin.com/" target="_blank">LinkedIn</Button> </Card.Link>
                                                <Card.Link><Button variant="success" href="https://github.com/" target="_blank">Github</Button></Card.Link>
                                                </Card.Body>
                                        </Card>
                                </Col>
                                <Col md={4}>
                                        <Card style={{margin: '1em' }}>
                                                <Card.Body>
                                                <Card.Title>Debolina Saha</Card.Title>
                                                <Card.Text>
                                                 Developer
                                                </Card.Text>
                                                <Card.Link><Button variant="primary" href="https://linkedin.com/" target="_blank">LinkedIn</Button> </Card.Link>
                                                <Card.Link><Button variant="success" href="https://github.com/" target="_blank">Github</Button></Card.Link>
                                                </Card.Body>
                                        </Card>
                                </Col>
                                <Col md={4}>
                                        <Card style={{margin: '1em' }}>
                                                <Card.Body>
                                                <Card.Title>Gunjan Sharma</Card.Title>
                                                <Card.Text>
                                                Developer
                                                </Card.Text>
                                                <Card.Link><Button variant="primary" href="https://linkedin.com/" target="_blank">LinkedIn</Button> </Card.Link>
                                                <Card.Link><Button variant="success" href="https://github.com/" target="_blank">Github</Button></Card.Link>
                                                </Card.Body>
                                        </Card>
                                </Col>
                                <Col md={4}>
                                        <Card style={{margin: '1em' }}>
                                                <Card.Body>
                                                <Card.Title>Hari Priya M</Card.Title>
                                                <Card.Text>
                                                 Developer
                                                </Card.Text>
                                                <Card.Link><Button variant="primary" href="https://linkedin.com/" target="_blank">LinkedIn</Button> </Card.Link>
                                                <Card.Link><Button variant="success" href="https://github.com/" target="_blank">Github</Button></Card.Link>
                                                </Card.Body>
                                        </Card>
                                </Col>
                                <Col md={4}>
                                        <Card style={{margin: '1em' }}>
                                                <Card.Body>
                                                <Card.Title>Shaifali Verma </Card.Title>
                                                <Card.Text>
                                                 Developer
                                                </Card.Text>
                                                <Card.Link><Button variant="primary" href="https://linkedin.com/" target="_blank">LinkedIn</Button> </Card.Link>
                                                <Card.Link><Button variant="success" href="https://github.com/" target="_blank">Github</Button></Card.Link>
                                                </Card.Body>
                                        </Card>
                                </Col>
                                <Col md={4}>
                                        <Card style={{  margin: '1em' }}>
                                                <Card.Body>
                                                <Card.Title>Suparna Arya</Card.Title>
                                                <Card.Text>
                                                Developer
                                                </Card.Text>
                                                <Card.Link><Button variant="primary" href="https://linkedin.com/" target="_blank">LinkedIn</Button> </Card.Link>
                                                <Card.Link><Button variant="success" href="https://github.com/" target="_blank">Github</Button></Card.Link>
                                                </Card.Body>
                                        </Card>
                                </Col>
                        </Row>
                </Container>
                </div>
        );
}

export default ContactUs;