import { Button, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const initialFormData = {
  luogo: '',
  inizio: '',
  fine: '',
};

export default function AddTravelers() {
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
    <Container>
      <Row>
        <Form onSubmit={handleSubmit}>
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
  );
}
