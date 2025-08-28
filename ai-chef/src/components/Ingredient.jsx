export default function Ingredient(props) {
  function deleteIngredient(ingredient) {
    props.modifyIngredient((prev) =>
      prev.filter((item) => item !== ingredient)
    );
  }

  return (
    <div className="ingredient">
      <li contentEditable={false}>{props.ingredient}</li>
      <button className="editButton">Edit</button>
      <button onClick={() => deleteIngredient(props.ingredient)}>Delete</button>
    </div>
  );
}
