import viaggi from "../data/data.js";
import { Container, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";

export default function GroupDetail() {

    const { id } = useParams()
    const { persone } = viaggi[id]

    return (
        <Container className="mt-5">
            <Link to="/" className="btn btn-primary mb-3">
                Torna alla home
            </Link>
            <Row className="gap-2">
                {persone.map((persona, index) => (
                    <Accordion key={index}>
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>{persona.nome} {persona.cognome}</Accordion.Header>
                            <Accordion.Body>
                                Codice fiscale: {persona.cod_fiscale}<br />
                                Email: {persona.email}<br />
                                Numero di telefono: {persona.numero_telefono}<br />
                                Numero estero: {persona.numero_estero}<br />
                                Contatto di emergenza: {persona.contatto_emergenza}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                ))}
            </Row>
        </Container>

    )
}
