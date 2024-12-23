import { Header, Footer } from "./Components/ComponentIndex"; //Header And Footer

//Routing Library [Tools]
import { createBrowserRouter, Navigate, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import {About,Cricket,Error,Form,Games,Hockey,Home,Clock} from "./Pages/Pages"; //Pages

//Create AppLayout
const AppLayout = () => {

  return(
    <>
     <div className="flex flex-col">
        <Header/>
        < ScrollRestoration/> {/* To get to the TOP */} 
        <main className="min-h-screen dark:text-gray-50 dark:bg-gray-900">
        <Outlet/>  {/* Populates Pages */} 
        </main>
        <Footer/>
       </div>
    </>
  );
}

const value = true; //This value is used by "Navigate"

//Create paths
const router = createBrowserRouter([

  {
   path: "/",
   element: <AppLayout/>,
   errorElement: <Error/>,
   children: [
    { path: "/",
      element: <Home year = {25}/> //You can pass props too
    },
    { path: "/about",
      element: <About />
    },
    { path: "/about/:name", //path: "/about/:name/:id
      element: <About/> //Now to retrive parameters you can use useParams Hook in About Componnet
    },
    { path: "/form",
      element: value ? <Form /> : <Navigate to="/" />, // Conditional routing based on "value"
    },
    { path: "/games", 
      element: <Games/>,
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
    },{path: "/clock",
      element: <Clock/>, // Conditional routing based on "value"
    }
   ]
  },
  {
    path: "*",
   element: <Error/>
  }

]);

//Provide Access
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
