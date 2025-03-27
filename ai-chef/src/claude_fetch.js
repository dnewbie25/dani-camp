// claude.js

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients.
You don't need to use every ingredient they mention in your recipe.
The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.
Format your response in markdown to make it easier to render to a web page.
`;

export async function getClaudeRecipe(ingredientsList) {
  // The request body matches the shape used by the @anthropic-ai/sdk
  const body = {
    model: "claude-3-7-sonnet-20250219",
    max_tokens: 1000,
    temperature: 1,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `I have ${ingredientsList}. Please give me a recipe you'd recommend I make!`
          }
        ]
      }
    ]
  };

  // Make the POST request using fetch
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Ensure you have set this environment variable in .env as VITE_ANTHROPIC_API_KEY
      "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    // Grab the error details for easier debugging
    const errorText = await response.text();
    throw new Error(`Anthropic API error: ${errorText}`);
  }

  // Parse the response and return the recipe text
  const json = await response.json();
  // The structure here should match what the @anthropic-ai/sdk returns
  return json.content[0].text;
}