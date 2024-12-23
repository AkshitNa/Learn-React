import './Price.css';

function Price({oldPrice, newPrice}){
    return(
        <div className="price">
           <span style = {{textDecorationLine : "line-through", color: "red"}}> {oldPrice}</span>
           <span style = {{fontWeight : 700}}> Rs. {newPrice} </span>
        </div>
    );
}

export default Price;

