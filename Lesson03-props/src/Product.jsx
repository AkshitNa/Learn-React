import './Product.css';
import Item from './Item';

function Product(){   
    return(
        <div className='product'> 
        {/* Passing Props of Item Component */}
          <Item itemName = "Asus" description = "2025 Pro Version" index = {0} /> 
          <Item itemName = "Motorola" description = "8888 The GenMoto" index = {1} />
          <Item itemName = "RealME" description = "Vice City Version" index = {2} />   
        </div>
          );  
}

export default Product;


