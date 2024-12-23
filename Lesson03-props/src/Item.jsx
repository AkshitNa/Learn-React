import './Item.css'; /* Web Pack */
import Price from './Price';
import Button from './Button';

function Item({itemName, description, index}){/* Props object ke elements */

    let oldPrice = ["100", "200", "300"]; /* Array 01 */
    let newPrice = ["50", "100", "69"]; /* Array 02 */

    return(
        <div className="item">
            <h2 style = {{fontWeight : 700}}> {itemName} </h2>
            <p> {description} </p>
            <Price oldPrice = {oldPrice[index]} newPrice = {newPrice[index]} /> {/* Price component me 
            price change hota hai, uska bhi ek prop bana lo. Since price baar baar
            use hora hai therefore we make Price Component. */}
            <br />
            <Button/>
        </div>
    );
}

export default Item;

/* Asa component jo bar bar use hota hai but jo uske ander likhi value hai woh change hoti hai har bar,
then uska prop object bana lo */