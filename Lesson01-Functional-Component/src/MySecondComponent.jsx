import './MySecondComponent.css'

function MySecondComponent()

{
  let naam = "Akshit Nautiyal";  // Creating a variable

  return (

    // <> </> It is a fragment to bundle multiples elements without using div.
    // You can use div also but it adds an extra element.
    // For only one element, there is no need of fragment or div.
    <>
    <h1>Hello, {naam.toUpperCase()} !!</h1>    
    <p className="MySecondComponent"> Hope you are doing well!! </p>
    </>
  );
}

export default MySecondComponent;
