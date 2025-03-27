import {useState } from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getClaudeRecipe } from "./claude_fetch";

export default function Main_app() {
  const [ingredients, setIngredients] = useState(["tomatoe","pasta","corn","japaleños"]);

  const [recipe, setRecipe] = useState("")

  async function handleRecipe() {
    const recipeResult = await getClaudeRecipe(ingredients)
    setRecipe(recipeResult)
  }
  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((previousList) => [...previousList, newIngredient]);
  }

  return (
    <main>
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
          <IngredientsList ingredients={ingredients} getRecipe={handleRecipe}/> 
          {recipe && <ClaudeRecipe recipe={recipe}/>}
        </section>
      )}
    </main>
  );
}
