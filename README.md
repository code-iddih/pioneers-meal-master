# Meal-Master

Meal Master is a React-based web application designed to help users explore meal categories, view detailed recipes, and manage meal plans. The app integrates with the MealDB API to fetch and display meal-related information and provides features for user authentication and feedback submission.


Features
Meal Categories: Browse a list of meal categories and explore available recipes.
Recipe Details: View detailed information about individual recipes.
User Authentication: Login functionality for accessing personalized features.
Meal Planning: Interactive calendar to help plan meals.
Feedback Form: Submit feedback about the application.
User Profile: View and manage user profile details.
Technologies
React: JavaScript library for building user interfaces.
React Router: For handling routing and navigation within the app.
Axios: HTTP client for making API requests.
React Calendar: For the meal planning interface.
Webpack: Module bundler used in development.
Installation
To set up the project locally, follow these steps:

Clone the Repository:

bash
Copy code
git clone https://github.com/Thazar-r/Meal-Master.git
Navigate to the Project Directory:

bash
Copy code
cd Meal-Master
Install Dependencies:

bash
Copy code
npm install
Start the Development Server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the app.

Usage
Home Page: View a welcome message and explore meal categories.
Category List: Click on a category to see a list of recipes associated with it.
Recipe Details: Click on a recipe to view its detailed information.
Meal Plan: Use the calendar to plan and manage meals.
Login: Access the login page to authenticate users.
Feedback: Provide feedback using the feedback form.
Profile: View and update user profile information.
API Integration
The application uses the MealDB API to retrieve meal data.

API Endpoints:

Categories: https://www.themealdb.com/api/json/v1/1/categories.php
Filter by Category: https://www.themealdb.com/api/json/v1/1/filter.php?c=${idCategory}
Recipe Details: https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}
Troubleshooting
API Fetch Errors: Ensure that the API endpoints are correct and that your internet connection is stable.
CORS Issues: If encountering CORS issues, verify that the API server supports cross-origin requests or consider using a proxy.
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.