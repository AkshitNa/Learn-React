// Button Component

function Button(){

    //Function when Button is clicked.
    function Buy() {
    alert("Thankyou for purachasing this item!!");
}
    return(
        <div>
        <button onClick = {Buy}> Buy </button>
        </div>
    );
}

export default Button;


