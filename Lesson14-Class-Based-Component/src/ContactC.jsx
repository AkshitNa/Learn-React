import React from "react";
// import {Component} from "react"; De-structure =>  class ContactC extends Component{}

class ContactC extends React.Component {

  constructor(props){
    super(props);

    this.state = {//State object to manage state [We do not have useState Hook in Class Component ]
      count: 0,
      count2: 5
    };

    console.log("Constructor is called then Render Method");}
  
  render(){

    let naam = "Akshit";  // Creating a variable
    let greeting = false; //Defining Conditons
    const {nameC} = this.props; //De-structure
    console.log("Rebder is called after the Constructor");

    return (
      <>
      <h1>Hello, {naam.toUpperCase()} !!</h1>    
      <p> Hope you are doing well!! {nameC} </p>
      <h2> {(greeting) ? "Functional-Component" : "Class-Component"}  </h2>
      <br />
      <h3>count : {this.state.count}-{this.state.count2}</h3>
      <br />
      <button onClick={()=> {

        this.setState({//Function
          count: this.state.count + 1,
          count2: this.state.count2 + 5,
        })
      }}> Count Button </button>
      </>
    );

  }
}

export default ContactC; //export default so that other component can use it.
