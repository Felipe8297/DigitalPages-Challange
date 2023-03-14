import { useState, useEffect } from "react";
import Fruit from "../Fruit";
import FruitDetails from "../FruitDetails";

function FruitList() {
  const [fruits, setFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState(null);

  useEffect(() => {
    fetch("http://pocs.digitalpages.com.br/mock/api/fruits-api/fruits.json")
      .then((response) => response.json())
      .then((data) => setFruits(data));
  }, []);

  function handleFruitClick(fruit: any) {
    setSelectedFruit(fruit);
  }

  function handleGoBack() {
    setSelectedFruit(null);
  }

  if (selectedFruit) {
    return <FruitDetails fruit={selectedFruit} onGoBack={handleGoBack} />;
  }

  return (
    <div>
      {fruits.map((fruit) => (
        <div key={fruit} onClick={() => handleFruitClick(fruit)}>
          <Fruit fruit={fruit} />
        </div>
      ))}
    </div>
  );
}

export default FruitList;
