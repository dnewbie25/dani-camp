/**
 * Makes a POST request to the server to get a recipe based on the given ingredients.
 * @param {Object} ingredients - An object with a single property, 'ingredients', which is an array of strings.
 * @return {Promise<string>} A promise which resolves to the recipe text if the request is successful, or an empty string if the request is not successful.
 */
export async function getRecipeFromServer(ingredients) {
  const response = await fetch('https://aichef.dreamhosters.com/claude-chef-api/recipe', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(ingredients)
  })
  if (!response.ok) {
    return
  }
  const json = await response.json();
  return json[0].text || ""
}
