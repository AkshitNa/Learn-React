import { useState } from "react";

function CounterLike()
{

    let [initialValue, setInitialValue] = useState(0); /* useState For Like Counts 0 or 1 */
    let [like, setLike] = useState(false); /* useState for Like  */
    
    //Best Practice = Use Arrow function to OPTIMIZE the code.
    let LikeChanger = () =>{
         /* Jaise hee like button par click hota hai, toh LIKE ki Final State ko opposite kr do initial ka. */

        if(like == false){
            setLike(!like); //Red Heart
            setInitialValue(initialValue + 1); /* if like is false then finalstate becomes true. Therefore, count + 1. */
        }else{
            setLike(!like); //Red Heart Close
            setInitialValue(initialValue - 1); /* if initial is true then finalstate becomes fasle. Therefore, count -1. */
        }       
    }; 

    return( <div>
            <h1 onClick={LikeChanger}> Like Button &nbsp;
            
            {
            like ?  (<i className = "fa-solid fa-heart" style={{color: "red"}}></i>) :(<i className = "fa-regular fa-heart"> </i>)
            }

            &nbsp; Likes = {initialValue}

            </h1> </div>
          );
}

export default CounterLike;

