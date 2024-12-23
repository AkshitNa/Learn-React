import React, { useState } from 'react'
import Card from './Card';

function Notes() {

// Maintaing the state of Current-data and notes
 const[inputData, setInputData] = useState("");
 const[Notes, setNotes] = useState([]);

 //setting input data
 function HandleChange(event){
     setInputData(event.target.value);
 }

 //setting notes using spread operator
 function addNotes(){
    const newNotesArray = [...Notes,inputData];
    setNotes(newNotesArray);
 }

  return (<>

    <label htmlFor="notes">Add Notes </label>
    <input type="text" name='notes' onChange={HandleChange} />
    <button style={ {marginLeft: "15px"}} onClick={addNotes}> Add </button> <br/>

    {//jsx is written in curly braces
    Notes.map (
        (Mynote, index) => 
    <span key={index+1} style={{listStyleType: "none"}}> 
    <Card Mynote = {Mynote}/> 
    </span>
    )
    }

    
    </>  )
}

export default Notes;