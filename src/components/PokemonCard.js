import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PokemonCard({ name, url }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pokemon.sprites.front_default} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <ul>

          </ul>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;