// Child Component => Wrapper.js

const Wrapper = ({ tittle, children }) => {
  
  return (

    <div> 
    <h1> {tittle} </h1>
    {children} 
    </div>
  );

};

export default Wrapper;




