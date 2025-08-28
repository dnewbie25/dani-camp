import Ingredient from "./Ingredient";
export default function IngredientsList(props) {
  let ingredientsListItems = props.ingredients.map((item) => {
    return (
      <Ingredient
        key={item}
        ingredient={item}
        id={item}
        modifyIngredient={props.modifyIngredient}
      />
    );
  });
  // function editIngredient(ingredient) {
  //   ingredientsListItems = ingredientsListItems.map((item) => {
  //     if (item === ingredient) {
  //       <Ingredient
  //         key={item}
  //         ingredient={item}
  //         id={item}
  //         modifyIngredient={props.modifyIngredient}
  //         editable={true}
  //         editIngredient={editIngredient}
  //       />;
  //     }
  //   });
  // }

  return (
    <>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </>
  );
}
