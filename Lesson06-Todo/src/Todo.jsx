import './Todo.css'; /* CSS */
import { useState } from 'react'; /* useState */
import { v4 as uuidv4 } from 'uuid'; //To generate Unique Keys.

export default function Todo(){

     // useState me [] ka matlab empty array and {} ka matlab object.
     //Therefore, object is passed in an array.

    let[ initialTask, finalTask ] = useState
    ([
        { Taskx : "Exercise" , Idx : uuidv4(), isDone : false }
    ]);

    //Input Field se Input lene ke liye. Abhi newTask is "EMPTY".
    let[ newTask, setNewTask ] = useState("");


    /* Arrow Functions */
    let updateTask = (event) =>{
         //Now, newTask will be updated. newTask = event.tatget.value.
           setNewTask(event.target.value);
        };

    let AddNewTask = () => {
        // newArray create krne se hi page re-render hota hai incase of Array and Object.
        let newArray = [...initialTask, { Taskx : newTask , Idx: uuidv4(), isDone : false}];
        finalTask(newArray); // Spread Operator ki help se new Array create kro with "newTask".
        setNewTask(""); // Jab input le lega, uske baad Input Filed Ko EMPTY kr do.
    };


    let deleteTask = (Id) =>{
        //Use filter function while deleting.
        let newCopyArray = initialTask.filter((x) => x.Idx !== Id);
        finalTask(newCopyArray);
    };

    let capital = () => {
       finalTask(   initialTask.map((x) => { return {Taskx: x.Taskx.toUpperCase()}; } )    );
    };

    let lower = () => {
        finalTask(   initialTask.map((x) => { return {Taskx: x.Taskx.toLowerCase()}; } )    );
     };

     let clear = () =>{
         finalTask([]);
     };
     
     let markAsDone = (Id) =>{
        finalTask((x)=> x.map((todo) => { if(todo.Idx == Id) { return {...todo, isDone : true};}
        else { return todo; } }));
     };



    return( 
    
    <div>

            <h1 className='title'>To Do List </h1>
            <input type="text" placeholder="Write Task" value = {newTask} onChange = {updateTask} />
            <button className="butt" onClick={AddNewTask}> Add </button>
            <br /> <br /> <hr />

            <h3> Tasks Added: </h3>

            {/* Using List */}
            <ul>{

            initialTask.map( 
            (TODO) =>
            { return <li className='list' key={TODO.Idx}> 
            <span className='list'
            style={ TODO.isDone ? 
            {textDecorationLine: "line-through", textDecorationColor: "red", color: 'black'} : {} }> 
            {TODO.Taskx} 
            </span> <br />
            <button className="butt2" onClick={() => markAsDone(TODO.Idx)}> Mark As Done </button> 
            <button className="butt2" onClick={() => deleteTask(TODO.Idx)}> Delete Task </button>
            </li>
            } 
                           )
            }
           </ul>

           <button className="butt3" onClick={capital}> UpperCase </button> 
           <button className="butt3" onClick={lower}> Lower Case </button> 
           <button className="butt3" onClick={clear}> Clear All </button> 

        </div>
    );
}