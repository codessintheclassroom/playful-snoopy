import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PetCard from './PetCard';
import { Row, Col, CardColumns, Container } from "react-bootstrap";
import Pet from "./Pet";

var pets = [
  { id: "1", name: "Berty", description: "Has a good nose for truffles" },
  { id: "2", name: "Argo", description: "A superhero (of the dog world)" },
  { id: "3", name: "Fred", description: "Has opinions about sausages" },
];

const App: React.FC = () => {
  const [pets, setPets] = useState<Array<Pet>>([]);
  useEffect(() => {
    const updatePets = async () => {
        const response = await fetch(`https://codess-shelter.azurewebsites.net/api/v1/pets`);
        const pets = await response.json();
        setPets(pets);
    };

    updatePets();
}, []);
  
  return (
  <Container>
    <Row>
    <Col>
      <CardColumns>
      {
        pets.map((pet) => <PetCard key={pet.id} pet={pet} />)
      }
      </CardColumns>
    </Col>
    </Row>
  </Container>
);
}

export default App;
