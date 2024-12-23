import React, { useState } from 'react'

function FruitInput() {
  
  // Maintaing the state of Current-Fruit
 const[currentFruit, setCurrentFruit] = useState("Mango");
  // We are controlling the state of Input Field.
 const[currentInput, setCurrentInput] = useState("");

 function HandleSubmit(event){
    setCurrentInput(event.target.value);
  }

 function UpdateFruit(){
  if(currentInput == ""){
    setCurrentFruit("Mango");
  }else
    setCurrentFruit(currentInput);
 }

  return (
    <>

    <h1> Akshit loves <span style={{color: "green"}}> {currentFruit} </span> </h1>

    <label htmlFor="myfruit"></label>
    <input type="text" name='myfruit' onChange={HandleSubmit}/>

    <button onClick={UpdateFruit} style={{marginLeft: "15px"}}> Update Fruit</button>
    
    </>
  )
}

export default FruitInput;