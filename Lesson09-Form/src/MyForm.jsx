// We Will use useRef() Hook insted of using onChange() function to get input filed value.

// useRef() stores state but will not re-render the component.  

import React, { useRef, useState } from 'react'

function MyForm() {

   const[name, setName] = useState("");
   const[fruit, setFruit] = useState("");
   const dataFromInputField = useRef(null);

    function handleCurrentForm(event){

        event.preventDefault();
       const warning = dataFromInputField.current.value;
        // alert(warning);
        setName(warning);
    }

    function handleFruit(event){

        const currentFruit = event.target.value;
        setFruit(currentFruit);
    }

  return (
    <>

       <h1> My Fomr using useRef() </h1>

       <form action="">

        <h1> Today!! There will be {name} </h1>
        <label htmlFor="myName"> Type Warning : </label>
        <input type="text" name='myName' ref={dataFromInputField} />
        <button onClick={handleCurrentForm}> Display Alert </button>

       <br /> <hr /> <hr />

       <h1> My favourite fruit is {fruit} </h1>
       <select onChange={handleFruit}>

        <option value="Mango"> Mango</option>
        <option value="Cheery"> Cheery</option>
        <option value="Banana"> Banana</option>
        <option value="Guava"> Guava</option>
        <option value="Lichi"> Lichi</option>


       </select>



       </form>
    
    </>
  );
}

export default MyForm