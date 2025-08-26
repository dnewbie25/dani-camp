import { useState } from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";
import { getRecipeFromServer } from "./fetch_recipe";

export default function Main_app() {
  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState("");

  /**
   * Retrieves a recipe from the server based on the current list of ingredients.
   * When the response is received, it updates the recipe state with the new recipe.
   * @returns {Promise<void>}
   */
  async function handleRecipe() {
    const recipeResult = await getRecipeFromServer({
      ingredients: ingredients,
    });
    setRecipe(recipeResult);
  }
  /**
   * Handles the submission of the add ingredient form.
   * @param {FormData} formData - The form data containing the new ingredient.
   */
  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((previousList) => [...previousList, newIngredient]);
  }

  return (
    <main>
      <section>
        <h2>How to use?</h2>
        <ol>
          <li>
            Enter the ingredients one by one by hitting Enter or pressing the "+
            Add Ingredient"
          </li>
          <li>
            Once you have 4 or more ingredients a "Get Recipe" button will show
            up
          </li>
          <li>
            Press that button to get your own custom recipe based on the
            ingredients
          </li>
          <li>Put your cooking skills into practice with your new recipe!</li>
        </ol>
      </section>
      <form className="add-ingredient-form" action={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <IngredientsList ingredients={ingredients} getRecipe={handleRecipe} />
          {recipe && <ClaudeRecipe recipe={recipe} />}
        </section>
      )}
    </main>
  );
}
