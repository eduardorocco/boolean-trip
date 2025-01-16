import { useContext, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { GlobalContext } from '../GlobalContext.jsx';

const initialFormData = {
  luogo: '',
  inizio: '',
  fine: '',
};

export default function AddTrip() {
  const [formData, setFormData] = useState(initialFormData);

  const { viaggiFinali, setViaggiFinali } = useContext(GlobalContext);

  function handleSubmit(event) {
    event.preventDefault();
    setViaggiFinali([...viaggiFinali, formData]);

    setFormData(initialFormData);
  }

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Container className="pb-5">
        <Row>
          <Form className="py-4 rounded-2 border border-body-secondary d-flex flex-column row-gap-3" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control name="luogo" onChange={handleChange} type="text" placeholder="Destinazione" value={formData.luogo} required />
            </Form.Group>

            <Form.Group>
              <Form.Control name="inizio" onChange={handleChange} type="date" placeholder="Data di partenza" value={formData.inizio} required />
            </Form.Group>

            <Form.Group>
              <Form.Control name="fine" onChange={handleChange} type="date" placeholder="Data di ritorno" value={formData.fine} required />
            </Form.Group>

            <Button type="submit">Aggiungi</Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}
