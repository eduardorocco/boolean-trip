import viaggi from '../data/data.js';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { GlobalContext } from '../GlobalContext.jsx';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Filter } from '../Filter.jsx';
import AddTravelers from '../components/AddTravelers.jsx';

export default function GroupDetail() {
  const { string, personeReattive, setPersoneReattive } = useContext(GlobalContext);
  const { id } = useParams();
  const { persone } = viaggi[id];

  useEffect(() => {
    setPersoneReattive(
      //filtro per ricerca persone
      persone.filter((persona) => persona.nome.toLowerCase().includes(string.toLowerCase()) || persona.cognome.toLowerCase().includes(string.toLowerCase()))
    );
  }, [string, persone]);

  return (
    <Container className="mt-5">
      <Row className=" justify-content-between">
        <Col className="col-6">
          <Link to="/" className="btn btn-primary mb-3 align-self-start mx-auto">
            Torna alla home
          </Link>
        </Col>
        <Col className="col-6 text-end">
          <Filter />
        </Col>
      </Row>
      <Row className="row-gap-3">
        <h2 className="mt-5 text-center">Elenco Viaggiatori</h2>
        {personeReattive.length > 0 &&
          personeReattive.map((persona, index) => (
            <Accordion key={index}>
              <Accordion.Item eventKey={index}>
                <Accordion.Header>
                  {persona.nome} {persona.cognome}
                </Accordion.Header>
                <Accordion.Body>
                  <strong>Codice fiscale: </strong>
                  {persona.cod_fiscale}
                  <br />
                  <strong>Email: </strong>
                  {persona.email}
                  <br />
                  <strong>Numero di telefono: </strong>
                  {persona.numero_telefono}
                  <br />
                  <strong>Numero estero: </strong>
                  {persona.numero_estero}
                  <br />
                  <strong>Contatto di emergenza: </strong>
                  {persona.contatto_emergenza}
                  <br />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        <AddTravelers />
      </Row>
    </Container>
  );
}
