
//Price = "Rs. 1000" [Default Value]
function ProductProps({ItemName, Price = "Rs. 5000"}){//Props
    
    return (

        <>
        {/* ItemName and Price values are filled by the
            component who use them. */}
        The price of the {ItemName} is {Price}. 
        </>

    );
}

export default ProductProps;

