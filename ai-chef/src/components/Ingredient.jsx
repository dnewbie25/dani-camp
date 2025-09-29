import { useState } from "react";

export default function Ingredient(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(props.ingredient);

  /**
   * Removes an ingredient from the list of ingredients.
   * @param {string} id - ID of the ingredient to be removed.
   */
  function deleteIngredient(id) {
    props.modifyIngredient((prev) => prev.filter((item) => item.id !== id));
  }

  /**
   * Updates an ingredient in the list of ingredients.
   * @param {string} id - ID of the ingredient to be updated.
   * @param {string} newValue - New value for the ingredient.
   */
  function updateIngredient(id, newValue) {
    if (newValue.trim() === "") {
      // If empty, delete the ingredient
      deleteIngredient(id);
      return;
    }

    props.modifyIngredient((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ingredient: newValue.trim() } : item
      )
    );
  }

  /**
   * Handles the edit button click.
   */
  function handleEdit() {
    if (isEditing) {
      // Save the changes
      updateIngredient(props.id, editValue);
      setIsEditing(false);
    } else {
      // Start editing
      setIsEditing(true);
      setEditValue(props.ingredient);
    }
  }

  /**
   * Handles the escape key press to cancel editing.
   */
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setEditValue(props.ingredient);
      setIsEditing(false);
    } else if (e.key === "Enter") {
      updateIngredient(props.id, editValue);
      setIsEditing(false);
    }
  }

  return (
    <div className="ingredient">
      <li>
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              updateIngredient(props.id, editValue);
              setIsEditing(false);
            }}
            autoFocus
          />
        ) : (
          props.ingredient
        )}
      </li>
      <button className="editButton" onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={() => deleteIngredient(props.id)}>Delete</button>
    </div>
  );
}
