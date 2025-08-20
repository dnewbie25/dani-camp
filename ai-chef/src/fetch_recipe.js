export async function getRecipeFromServer(ingredients) {
  const response = await fetch('http://66.33.207.84:8000/recipe', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(ingredients)
  })
  if (!response.ok) {
    console.log(response);

    console.log("esto anda fallando");
    return
  }
  const json = await response.json();
  console.log(json);

}

getRecipeFromServer({ "ingredients": ["tomatoe", "bread", "lettuce", "peas"] })