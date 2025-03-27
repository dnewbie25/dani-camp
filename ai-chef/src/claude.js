import Anthropic from "@anthropic-ai/sdk"

const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
console.log(apiKey);

const anthropic = new Anthropic({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
});
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

export async function getClaudeRecipe(ingredientsList) {
  const msg = await anthropic.messages.create({
    model: "claude-3-7-sonnet-20250219",
    max_tokens: 1000,
    temperature: 1,
    dangerouslyAllowBrowser: true,
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
  });
  return msg.content[0].text
}


