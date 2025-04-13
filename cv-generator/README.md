# CV Generator

The CV Generator is a React-based web application that allows users to input their personal, educational, and professional information to generate a formatted CV. The application provides a user-friendly interface for entering details and displays the CV in a structured format.

## Live Site

[CV Generator](https://dani-cv-generator.netlify.app/)

## Features

- Input fields for personal information, education, and work experience.
- Real-time preview of the CV as the user enters data.
- Handles dynamic date formatting and conditional rendering for fields like graduation status and job end dates.

## Technologies Used

- **React**: For building the user interface and managing state.
- **CSS**: For styling the application and ensuring a responsive layout.
- **JavaScript**: For handling logic and dynamic updates.

## Key Functions

### Frontend Components
- **`Inputs.jsx`**: Handles user input and updates the state with the entered data.
- **`CV.jsx`**: Displays the formatted CV based on the input data.
- **`Experience.jsx`**: Renders a list of job experiences dynamically.

### Utility Functions
- **Date Formatting**: Converts dates into a readable format (e.g., "Oct 2020 - Present").
- **Dynamic Rendering**: Handles conditional rendering for fields like graduation status and job end dates.

## How It Works

1. Users fill out the input fields for personal, educational, and professional details.
2. The application updates the state in real-time using React's `useState` hook.
3. The CV preview updates dynamically to reflect the entered information.
4. The application ensures proper formatting and handles edge cases like missing dates or incomplete information.

## Future Updates

- Add more education and work experience lines, currently it is limited to one line per section
- Download PDF button with the current formatting and 1 inch margin as an official document
- Dark mode
- Ability to change fonts, but the style will be the same. My goal is to standardize an easy-to-read CV format 

Enjoy creating your CV effortlessly!