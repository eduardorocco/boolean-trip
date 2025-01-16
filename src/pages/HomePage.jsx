import viaggi from '../data/data.js';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Filter } from '../Filter.jsx';
import { GlobalContext } from '../GlobalContext.jsx';
import { useContext } from 'react';
import { useEffect } from 'react';

import AddTrip from '../components/AddTrip.jsx';

export default function HomePage() {
  const { string, viaggiFinali, setViaggiFinali } = useContext(GlobalContext);

  function formatDate(date) {
    const formattedDate = new Date(date).toLocaleDateString('it-IT');
    return formattedDate;
  }

  useEffect(() => {
    setViaggiFinali(viaggi.filter((viaggio) => viaggio.luogo.toLowerCase().includes(string)));
  }, [string]);

  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex justify-content-between">
          <Col>
            <h1>Viaggi</h1>
          </Col>
          <Col className="text-end align-self-center">
            <Filter />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row className="row-gap-5">
          {viaggiFinali.map((viaggio, index) => (
            <Col key={index} className="col-12 col-sm-6  col-md-4 col-xl-3">
              <Card key={index}>
                <Card.Body>
                  <Card.Title>{viaggio.luogo}</Card.Title>
                  <Card.Text>
                    Inizio: {formatDate(viaggio.inizio)}
                    <br />
                    Fine: {formatDate(viaggio.fine)}
                    <br />
                  </Card.Text>
                  <Link to={`/${index}`}>
                    <Button>Elenco Viaggiatori</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <h2>Aggiungi viaggio</h2>
          <AddTrip />
        </Row>
      </Container>
    </>
  );
}
