# AI Chef 🍳

AI Chef is a simple and fun React application that helps you discover new recipes based on the ingredients you have on hand. Just list your ingredients, and our AI-powered chef will suggest a creative, markdown-formatted recipe for you to try!

The app is interactive and lets you modify or remove ingredients. But keep in mind that you always need to have at least 4 ingredients for it to work.

## Live site

[my-ai-chef.netlify.app](https://my-ai-chef.netlify.app/)

## How To Use

1.  **Open the site**
2.  **Add your ingredients**: On the main page, you'll see an input field. Type in an ingredient you have (e.g., "chicken", "rice", "broccoli") and click the "Add ingredient" button.
3.  **Build your list**: Continue adding all the ingredients you want to use. They will appear in a list.
4.  **Get a recipe**: Once you're ready, click the "Get Recipe" button.
5.  **Modify your list**: You can edit and delete items by clicking the Edit/Delete buttons. After that, you can click on "Get Recipe" again to get a new recipe based on your new ingredients.
6.  **Enjoy your recipe**: The app will make a call to the AI chef and display a recipe in a nicely formatted way. The recipe will be generated using some or all of the ingredients you provided.

## API

The application communicates with a custom-built FastAPI backend to generate the recipes. The API has the following endpoint:

### POST /recipe

- **Endpoint:** `/recipe`
- **Method:** `POST`
- **Description:** Takes a list of ingredients and returns a recipe suggestion in markdown format.
- **Request Body:**
  ```json
  {
    "ingredients": ["tomato", "carrot", "beef", "onion"]
  }
  ```
- **Response:**
  - Returns a markdown-formatted recipe suggestion using some or all of the provided ingredients.
- **API Repository**:
  - [claude-chef-api](https://github.com/dnewbie25/claude-chef-api/tree/master)

## Technologies Used

- **Frontend**:
  - [React](https://react.dev/)
  - [Vite](https://vitejs.dev/)
- **Markdown Rendering**:
  - [react-markdown](https://github.com/remarkjs/react-markdown): A great package for rendering markdown content directly in React components, ensuring the recipes are displayed beautifully.
- **Animation**:
  - [react-loader-spinner](https://github.com/mhnpd/react-loader-spinner): This is the package used for the loading spinner when the fetch is working.
- **Backend**:
  - [FastAPI](https://fastapi.tiangolo.com/)
