import React from 'react';
import logo from './logo.svg';
import './App.css';
import PetCard from './PetCard';
import { Row, Col, CardColumns, Container } from "react-bootstrap";

var mockedPets = [
  { id: "1", name: "Berty", description: "Has a good nose for truffles" },
  { id: "2", name: "Argo", description: "A superhero (of the dog world)" },
  { id: "3", name: "Fred", description: "Has opinions about sausages" },
];

const App: React.FC = () => {
  return (
  <Container>
    <Row>
    <Col>
      <CardColumns>
      {
        mockedPets.map((pet) => <PetCard key={pet.id} pet={pet} />)
      }
      </CardColumns>
    </Col>
    </Row>
  </Container>
);
}

export default App;
