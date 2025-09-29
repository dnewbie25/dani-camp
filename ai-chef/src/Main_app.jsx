import { useState } from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";
import { getRecipeFromServer } from "./fetch_recipe";
import { ColorRing } from "react-loader-spinner";

export default function Main_app() {
  const [ingredients, setIngredients] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [recipe, setRecipe] = useState("");

  /**
   * Retrieves a recipe from the server based on the current list of ingredients.
   * When the response is received, it updates the recipe state with the new recipe.
   * @returns {Promise<void>}
   */
  async function handleRecipe() {
    setSpinner(true);
    const recipeResult = await getRecipeFromServer({
      ingredients: ingredients.map((item) => item.ingredient),
    });
    setRecipe(recipeResult);
    setSpinner(false);
  }
  /**
   * Handles the submission of the add ingredient form.
   * @param {FormData} formData - The form data containing the new ingredient.
   */
  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((previousList) => [
      ...previousList,
      { ingredient: newIngredient, id: crypto.randomUUID() },
    ]);
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
          <IngredientsList
            ingredients={ingredients}
            getRecipe={handleRecipe}
            modifyIngredient={setIngredients}
          />

          {!spinner ? (
            <ClaudeRecipe recipe={recipe} spinner={setSpinner} />
          ) : (
            <div id="spinner">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          )}
        </section>
      )}
    </main>
  );
}
