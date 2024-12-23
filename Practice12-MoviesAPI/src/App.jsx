import { Header, Footer, ScrollToTop } from "./Components/ComponentIndex"; //Header And Footer

//Routing Library [Tools]
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Error, MovieDetail, MovieList, Search } from "./Pages/PagesIndex"; //Pages

//Create AppLayout
const AppLayout = () => {

  return(
    <>
     <div className="flex flex-col dark:bg-darkbg">
        <Header/>
        <ScrollToTop/> {/* To get to the top */} 
        <main className="min-h-screen">
        <Outlet/>  {/* Populates Pages */} 
        </main>
        <Footer/>
       </div>
    </>
  );
}

//Create paths
const router = createBrowserRouter([

  {
   path: "/",
   element: <AppLayout/>,
   errorElement: <Error/>,
   children: [

    { path: "/",
      element: <MovieList apiPath="movie/now_playing" title="Home" />,
      errorElement: <Error/>
    },
      { path: "/movie/:id", 
        element: <MovieDetail/>,
        errorElement: <Error/>
      },
      { path: "/movies/popular", 
        element: <MovieList apiPath="movie/popular" title="Popular" />,
        errorElement: <Error/>
      },
      { path: "/movies/top", 
        element: <MovieList apiPath="movie/top_rated" title="Top Rated" />,
        errorElement: <Error/>
      },
      {path: "movies/upcoming",
        element: <MovieList apiPath="movie/upcoming" title="Upcoming" />,
        errorElement: <Error/>
      }
      
   ]
  },
    {path: "/search",
      element: <Search/>,
      errorElement: <Error/>
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