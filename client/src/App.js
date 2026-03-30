import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Recipe from "./pages/Recipe";
import AddRecipe from "./pages/AddRecipe";
import Details from "./pages/Details";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "recipe",
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
