import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/axiosHelper";
import toast from "react-hot-toast";

const RecipeContext = createContext();
const RecipeProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);
  console.log(recipe);
  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const response = await API.get(`/api/recipe`);
      setRecipe(response.data.data.recipe);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRecipe();
  }, []);

  const deleteRecipe = async (id) => {
    try {
      await API.delete(`/api/recipe/${id}`);
      toast.success("Deleted Successfully");
      await fetchRecipe();
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to delete");
    }
  };
  return (
    <RecipeContext.Provider value={{ loading, recipe, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
const useRecipe = () => useContext(RecipeContext);
export { RecipeProvider, RecipeContext, useRecipe };
