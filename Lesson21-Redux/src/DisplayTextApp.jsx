import './App.css'

import React from 'react';

import {useDispatch, useSelector} from "react-redux"; 
import { setText } from './Redux/Slices/DisplayText';

function DisplayTextApp() {

  const text = useSelector(state => state.TextReducer.text);
  const dispatch = useDispatch();

  //Function

  const handleChange = (e) => {
    dispatch(setText(e.target.value));
  };

  return (
    <div>
      <h1>Text Display Application </h1>

      <input 
        type="text" 
        value={text}
        onChange={handleChange} 
      />

      <p>Typed Text: {text}</p>

    </div>
  );
}

export default DisplayTextApp;
