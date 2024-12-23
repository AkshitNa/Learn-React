import { useState } from "react";
import "./Form.css";

function Form(){
    
    //Object
    let [formData, setFormData] = useState( 
                    { 
                        FirstName : "",
                        LastName : "",
                        Password: "", 
                    });

    // Functions when TextFiled is clicked.
   
        
        // Noob Way

        // let inputFieldName  = event.target.name;
        // let inputFieldValue = event.target.value; 
        
        // setFormData((data) => { data[inputFieldName] = inputFieldValue; return {...data}} );

        //...........................................................................................

        // Functions when TextFiled is clicked.
        let handleInputData = (event) =>{
        setFormData((fData) => { 
            fData[event.target.name] = event.target.value; 
            return {...fData}} 
        );

          //...........................................................................................

        //Best Way

        // setFormData((data) => {return {...data, [event.target.name] : event.target.value }} );

        //[Variable-Name] => Variable Name is Square Bracket, this is called Computed Propery Name Method. By doing this, 
        // Basically, we are accessing input field "Directly".

    };

    //Function when Submit Button is clicked
    let handleSubmit = (event) =>{
        event.preventDefault();
       if (validateForm()) {
       // proceed with form submission
       console.log(formData);
       setFormData({FirstName : "", LastName : "", Password: ""});
    }
    };

    const validateForm = () => {
        if (!formData.FirstName || !formData.Password) {
          alert("Name and Password are required");
          return false;
        }
        return true;
      };

    return (
        <>

        <h3> Registation Form </h3>

        <form onSubmit={handleSubmit}>

            <label htmlFor="firstname"> Firstname </label>

            <input 
            type="text"
            id="firstname"
            placeholder="Write Here..."
            value={formData.FirstName}
            onChange={handleInputData}
            name = "FirstName"/> <br />

            <label htmlFor="Lastname"> Lastname </label>

            <input 
            type="text"
            id="Lastname"
            placeholder="Write Here..."
            value={formData.LastName}
            onChange={handleInputData}
            name = "LastName"/> <br />

            <label htmlFor="pass"> Password </label>
            <input 
            type = "password"
            id="pass"
            value={formData.Password}
            onChange={handleInputData}
            name = "Password"/> <br />
           
            <button> Submit </button>

        </form>

        </>
    );

}

export default Form;

//onChange event occurs when we write something on the textfield or password-field