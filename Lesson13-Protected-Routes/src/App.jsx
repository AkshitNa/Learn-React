import {Header,Footer} from "./Components/ComponentIndex"; //Header And Footer

//Routing Library [Tools]
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";

//Importing Pages
import { About,Cricket,Error,Form,Games,Hockey,Home,Clock,Login,LoginError } from "./Pages/Pages";

//For Fake Login
import { useMyData } from "./Utils/Provider";

//AppLayout Component with Fixed Structure
const AppLayout = () => {

  return(
    <>
     <div className="flex flex-col">
        <Header/>
        <main className="min-h-screen">
        <Outlet/>  {/* Populates Unique Pages */} 
        </main>
        <Footer/>
       </div>
    </>
  );
}

//Protected Routes
const ProtectedRoute = ({children}) => {

const {fakeLogin} = useMyData();

return fakeLogin ? children : <LoginError/>
};

//Create Router Configuration
const router = createBrowserRouter([{

   path: "/",
   element: <AppLayout/>,//Loads basic structure
   errorElement: <Error/>,
   children: [ //To populate outlet

    { path: "/", //by default outlet
      element: <Home year = {25}/> //You can pass props too
    },
    { path: "/about",
      element:  <ProtectedRoute> <About /> </ProtectedRoute> 
    },
    { path: "/about/:name", //path: "/about/:name/:id
      element:  <ProtectedRoute> <About /> </ProtectedRoute> //Now to retrive parameters you can use useParams Hook in About Componnet
    },
    { path: "/form",
      element:  <ProtectedRoute> <Form /> </ProtectedRoute> , // Conditional routing based on "value"
    },
    {path: "/clock",
      element:  <ProtectedRoute> <Clock /> </ProtectedRoute> , // Conditional routing based on "value"
    },
    { path: "/games", 
      element:  <ProtectedRoute> <Games /> </ProtectedRoute> ,

      children:[
        { path: "en", //Nested Routes
          element: <Cricket/>
        },
        { path: "in", //Nested Routes
          element: <Hockey/>
        },
        { path: "*", //Nested Routes
          element: <Navigate to = "/"/> //Navigate is use as Link but inside Router Configuaration
          //element: <Home/> //Do not use this it will load Home Component here.
        }
      ]

    }

   ]
  },
  {path: "/login",
    element: <Login/>
  },
  {
    path: "*", //Fallback route for unmatched path
   element: <Error/>
  }

]);

//Provide Access
function App() {
  return <RouterProvider router={router}/>;
}

export default App;