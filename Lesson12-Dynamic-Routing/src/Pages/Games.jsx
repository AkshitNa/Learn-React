import { useEffect } from 'react';
import { useNavigate,Outlet } from 'react-router-dom';

export const Games = () => {

  const navigate = useNavigate(); //useNavigate() Hook is not used in "Router Configuration"

  useEffect(()=> {
    document.title = "LinkedInMart/Games"; //To set tittle 
  });

  const handleSubmit = () => {

    alert("Data is submitted");
    console.log("Code to do some tasks... is Completed!!");
    return navigate("/"); 
  }


  return (
    <div> 
        <h1 className='text-center font-bold text-3xl my-3'> Cricket </h1>

        <h3 className='text-md'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus. </h3>

        <hr />

        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus. 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
         facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        </h3>

        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus. 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
         facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        </h3>

        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus. 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
         facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        </h3>

        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus. 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
         facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        </h3>

        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus. 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
         facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        </h3>

        <h3> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus. 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
         facilis iste possimus totam vel libero voluptate cumque quia sunt, ullam ea, sint laborum dolore ex molestiae sapiente a quo temporibus.
        </h3>

        <div>

        <Outlet/>

        </div>

        <div className='flex justify-center my-3'>
        <button onClick={handleSubmit} className='bg-green-500 text-xl font-bold hover:bg-green-700 rounded-md p-2'> Submit </button>
        </div>


        
     </div>
  )
};