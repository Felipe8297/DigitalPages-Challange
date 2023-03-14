import { FruitCard } from "./style";


function Fruit({ fruit } : any) {
  return (  
    <FruitCard>
      <h2>{fruit.name}</h2>
      <img src={fruit.photo} alt={fruit.name} />
    </FruitCard>
  );
}

export default Fruit;