import React, {useState} from "react";

function PlantCard({plant}) {
  
  const [soldOut, setSoldOut] = useState(true)
  
  function handleClick (e) {
    setSoldOut(!soldOut)
}
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button onClick={handleClick} className="primary">{soldOut ? "In Stock" : "Out of Stock"}</button>
    </li>
  );
}

export default PlantCard;
