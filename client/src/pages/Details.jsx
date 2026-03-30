import { useParams } from "react-router-dom";
import { useRecipe } from "../context/RecipeContext";

const Details = () => {
  const { recipe } = useRecipe();
  const { id } = useParams();

  const selectedRecipe = recipe.find((item) => item._id === id);

  if (!selectedRecipe) {
    return <h3 className='text-center mt-5'>Recipe not found</h3>;
  }
  return (
    <div className='container mt-4'>
      {/* Title */}
      <h2 className='mb-3'>{selectedRecipe.name}</h2>

      <div className='card shadow-sm p-3'>
        <div className='row g-3'>
          {/* LEFT SIDE IMAGE */}
          <div className='col-lg-5 col-md-12'>
            <img
              src={selectedRecipe.images[0]}
              alt={selectedRecipe.name}
              className='img-fluid rounded'
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className='col-lg-7 col-md-12'>
            <h4>
              <strong>Cuisine:</strong> {selectedRecipe.cuisine}
            </h4>

            {/* INGREDIENTS */}
            <div className='mt-3'>
              <h5>
                <strong>Ingredients:</strong>
              </h5>
              <ul className='ps-3'>
                {selectedRecipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* INSTRUCTIONS */}
            <div className='mt-3'>
              <h5>
                <strong>Instructions:</strong>
              </h5>
              <ol className='ps-3'>
                {selectedRecipe.instructions.map((step, index) => (
                  <li key={index} className='mb-1'>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
