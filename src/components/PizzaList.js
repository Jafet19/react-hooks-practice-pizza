import React from "react";
import Pizza from "./Pizza";

function PizzaList({pizza}) {

  let pizzaRender = pizza.map((pizza) => {
    return(
    <Pizza 
    singlePizza={pizza}
    key={pizza.id}
    />)
})
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
          {pizzaRender}
      </tbody>
    </table>
  );
}

export default PizzaList;
