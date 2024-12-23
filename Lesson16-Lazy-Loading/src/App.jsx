import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "./Components/Navigation";

//Pages
import Home from "./Components/Home";
import About from "./Components/About";
// import Clock from "./Components/Clock"; [Not Calling This Way]
import Error from "./Components/Error";
import User from "./Components/User"; // Import the new User component

const Clock = lazy(() => import("./Components/Clock")); //Lazy Loading


// AppLayout component that includes Navigation and Outlet
function AppLayout() {
  return (
    <div>
      <Navigation />
      <Outlet /> {/* Renders the child route components */}
    </div>
  );
}

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, //Loads Navigation Component and choosen Outlet.
    errorElement: <Error />, // Error component for this route
    children: [ // Wraping the children under the AppLayout
      {
        path: "/",
        element: <Home />, // By default Outlet
      },
      {
        path: "/about",
        element: <About />, // Route for the About component
      },
      {
        path: "/clock",
        element: (
        <Suspense fallback ={<h1>...Loading </h1>}>
        <Clock />
        </Suspense>), // Lazy Loading Handling
      },
      {
        path: "/user/:userId", // For the Route with dynamic parameter
        element: <User />, // Route for the User component
      },
    ],
  },
  {
    path: "*",
    element: <Error />, // Fallback route for unmatched paths
  },
]);


function App() {

  return (
  <>
  <RouterProvider router={router} />;
  </>
  )
}

export default App;


