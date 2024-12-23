import React, { useState } from 'react'

function Fruit() {

    const[fruit, setFruit] = useState("Manago")
  return (
    <>
    <h1> My favourite fruit is {fruit} </h1>
    <button onClick={ ()=> { setFruit("Banana")}}> Banana </button>
    <button onClick={ ()=> { setFruit("Apple")}}> Apple </button>
    <button onClick={ ()=> { setFruit("Guava")}}> Guava </button>
    </>
  )
}

export default Fruit