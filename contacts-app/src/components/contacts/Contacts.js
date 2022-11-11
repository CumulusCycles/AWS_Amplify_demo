import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Contacts() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Contacts</h1></Col>
            </Row>
            <Row>
                <Col className="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img 
                            src="/img/contact_1.png" 
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Stacy Carlson</Card.Title>
                            <Card.Text>
                                stacy@test.com
                                <br />555.123.4567
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img 
                            src="/img/contact_2.png" 
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Chris Fowler</Card.Title>
                            <Card.Text>
                                chris@test.com
                                <br />555.123.5678
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img 
                            src="/img/contact_3.png" 
                            variant="top" />
                        <Card.Body>
                            <Card.Title>Raul Hudson</Card.Title>
                            <Card.Text>
                                raul@test.com
                                <br />555.123.6789
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacts;