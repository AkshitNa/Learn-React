import React from "react";

function ContactF(props){
  
  let naam = "Akshit";  // Creating a variable
  let greeting = true; //Defining Conditons

  return (
    <>
    <h1>Hello, {naam.toUpperCase()} !!</h1>    
    <p> Hope you are doing well!! {props.nameF} </p>
    <h2> {(greeting) ? "Functional-Component" : "Class-Component"}  </h2>
    </>
  );
}

export default ContactF;


