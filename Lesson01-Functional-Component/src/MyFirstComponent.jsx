function MyFirstComponent(){ //Functional Component
  
  let naam = "Akshit";  // Creating a variable
  let greeting = false; //Defining Conditons

  return (

    // <> </> It is a fragment to bundle multiples elements without using div.
    // You can use div also but it adds an extra element.
    // For only one element, there is no need of fragment or div.
    <>
    <h1>Hello, {naam.toUpperCase()} !!</h1>    
    <p> Hope you are doing well!! </p>
    <h2> {(greeting) ? "Hello-Akshit" : "Bye-Akshit"}  </h2>
    </>
  );
}

export default MyFirstComponent; //export default so that other component can use it.