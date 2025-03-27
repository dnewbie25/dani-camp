export default function IngredientsList(props){
  const ingredientsListItems = props.ingredients.map(item=>(
    <li key={item}>{item}</li>
  ))

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
  )
}