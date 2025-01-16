import { Button, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState, useContext } from 'react';
import { GlobalContext } from '../GlobalContext.jsx';

const initialFormData = {
  nome: '',
  cognome: '',
  cod_fiscale: '',
  email: '',
  numero_telefono: '',
  numero_estero: '',
  contatto_emergenza: '',
};

export default function AddTravelers() {
  const [formData, setFormData] = useState(initialFormData);

  const { personeReattive, setPersoneReattive } = useContext(GlobalContext);

  function handleSubmit(event) {
    event.preventDefault();
    setPersoneReattive([...personeReattive, formData]);
    // console.log(personeReattive)
    setFormData(initialFormData);
  }

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(personeReattive);
  }
  return (
    <Container className="mt-5">
      <Row>
        <h2 className="text-center mb-3">Aggiungi un nuovo partecipante</h2>
        <Form className=" py-4 rounded-2 border border-body-secondary d-flex flex-column row-gap-3" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control name="nome" onChange={handleChange} type="text" placeholder="Nome" value={formData.nome} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Cognome</Form.Label>
            <Form.Control name="cognome" onChange={handleChange} type="text" placeholder="Cognome" value={formData.cognome} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Codice fiscale</Form.Label>
            <Form.Control name="cod_fiscale" onChange={handleChange} type="text" placeholder="Codice fiscale" value={formData.cod_fiscale} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" onChange={handleChange} type="text" placeholder="Email" value={formData.email} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Numero di telefono</Form.Label>
            <Form.Control name="numero_telefono" onChange={handleChange} type="text" placeholder="Numero di telefono" value={formData.numero_telefono} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Numero estero</Form.Label>
            <Form.Control name="numero_estero" onChange={handleChange} type="text" placeholder="Numero estero" value={formData.numero_estero} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Contatto di emergenza</Form.Label>
            <Form.Control name="contatto_emergenza" onChange={handleChange} type="text" placeholder="Contatto di emergenza" value={formData.contatto_emergenza} required />
          </Form.Group>

          <Button className="mt-3" type="submit">
            Aggiungi
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
