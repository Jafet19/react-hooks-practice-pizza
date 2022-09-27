import React, {useEffect, useState} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizza, setPizza] = useState(null)

  useEffect(()=>{
    fetch("http://localhost:3001/pizzas")
    .then(res => res.json())
    .then(data => setPizza(data))
  },[])

  
  return (
    <>
      <Header />
      <PizzaForm />
      {pizza ? <PizzaList pizza={pizza}/>: null}
    </>
  );
}

export default App;
