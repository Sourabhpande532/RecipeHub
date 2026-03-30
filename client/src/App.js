import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Recipe from "./pages/Recipe";
import AddRecipe from "./pages/AddRecipe";
import Details from "./pages/Details";
import Error from "./pages/Error";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Recipe />,
      },
      {
        path: "addRecipe",
        element: <AddRecipe />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Toaster position='top-right' reverseOrder={false} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
