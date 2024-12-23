import React from 'react'

function Card(props) {

    const cardStyling = {
        padding: "2px", 
        borderRadius: "20px",
        fontSize: "50px",
        border: "solid 5px black",
        backgroundColor: "peachpuff",
        color: "black",
        margin: "5px"}

  return(<p style={cardStyling} > {props.Mynote} </p>);
}

export default Card;