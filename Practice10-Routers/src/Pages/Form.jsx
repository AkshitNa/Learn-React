import { useState } from "react";

export const Form = () => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        let data = e.target.value;
        setInputValue(data);
    }

  return (
    <div className="w-80 h-auto bg-purple-500 m-3">

        <h1 className="text-center">Form</h1>

        <form className="m-3">
            <input className="mx-auto p-2 border-1 border-black rounded-md focus:bg-yellow-200" type="text" placeholder="Write Name" value={inputValue} onChange={handleChange}/>
            <button className="bg-red-400 rounded-md border-2 ml-3 p-2"
            onClick={() => {setInputValue("")}}>
            Clear
            </button>
        </form>

        <h3 className="font-bold ml-3">Your name : {inputValue}</h3>
        <h3 className="font-bold ml-3">Total Words : {inputValue.length>0 ? inputValue.length : 0}</h3>

    </div>
  )
}