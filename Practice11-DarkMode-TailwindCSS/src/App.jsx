import { Header, Footer } from "./Components/ComponentIndex"; //Header And Footer

//Routing Library [Tools]
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Error, MovieDetail, MovieList, Search } from "./Pages/PagesIndex"; //Pages

//Create AppLayout
const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col dark:bg-darkbg">
        <Header />
        <main className="min-h-screen">
          <Outlet /> {/* Populates Pages */}
        </main>
        <Footer />
      </div>
    </>
  );
};

//Create paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MovieList/>,
      },
      { path: "/movie/:id",
        element: <MovieDetail /> 
      },
      {
        path: "/movies/popular",
        element: <MovieDetail/>,
      },
      {
        path: "/movies/top",
        element: <MovieList/>,
      },
      {
        path: "movies/upcoming",
        element: <MovieList/>,
      },
    ]
  },
  { path: "/search",
    element: <Search />
  },
  {
    path: "*",
    element: <Error />,
  },
]);

//Provide Access
function App() {
  return <RouterProvider router={router} />;
}

export default App;
