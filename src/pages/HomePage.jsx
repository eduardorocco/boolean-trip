import viaggi from "../data/data.js";
import { Container, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <Container className="mt-5">
            <Row className="flex-column gap-2">
                {viaggi.map((viaggio, index) => (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{viaggio.luogo}</Card.Title>
                            <Card.Text>
                                Inizio: {viaggio.inizio}<br />
                                Fine: {viaggio.fine}<br />
                                Costo: {viaggio.costo}
                            </Card.Text>
                            <Link to={`/${index}`}>
                                <Button>Dettagli</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    )
}