import viaggi from '../data/data.js';
import { Container, Row, Card, Button } from 'react-bootstrap';
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
        <Filter />
        <Row className="flex-column gap-2">
          {viaggiFinali.map((viaggio, index) => (
            <Card key={index} style={{ width: '18rem' }}>
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
          ))}
        </Row>
      </Container>
      <AddTrip />
    </>
  );
}
