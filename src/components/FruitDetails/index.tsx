import { Card } from "./style";

function FruitDetails({ fruit, onGoBack }: any) {
  return (
    <Card>
      <img src={fruit.photo} alt={fruit.name} />
      <h2>{fruit.name}</h2>
      <p>Calorias: {fruit.calories}</p>
      <p>Proteína: {fruit.protein}</p>
      <p>Carboidratos: {fruit.carbohydrates}</p>
      <p>Fibra: {fruit.fiber}</p>
      <p>Gordura: {fruit.blubber}</p>
      <p>Porção: {fruit.portion}</p>
      <button onClick={onGoBack}>Voltar</button>
    </Card>
  );
}

export default FruitDetails;
