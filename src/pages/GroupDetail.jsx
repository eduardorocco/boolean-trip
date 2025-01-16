import viaggi from '../data/data.js';
import { Container, Row } from 'react-bootstrap';
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
      <Link to="/" className="btn btn-primary mb-3">
        Torna alla home
      </Link>
      <Filter />
      <Row className="gap-2">
        {personeReattive.map((persona, index) => (
          <Accordion key={index}>
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                {persona.nome} {persona.cognome}
              </Accordion.Header>
              <Accordion.Body>
                Codice fiscale: {persona.cod_fiscale}
                <br />
                Email: {persona.email}
                <br />
                Numero di telefono: {persona.numero_telefono}
                <br />
                Numero estero: {persona.numero_estero}
                <br />
                Contatto di emergenza: {persona.contatto_emergenza}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
        <AddTravelers />
      </Row>
    </Container>
  );
}
