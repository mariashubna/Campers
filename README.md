# Camper Rental App

This is a camper rental application that allows users to browse various campers, add them to their favorites, and filter the results by different criteria. Users can view detailed information about each camper, including features and reviews.

## Key Features

- **Browse Camper Catalog**: Users can browse available campers with filters based on various characteristics.
- **Favorites**: The ability to add campers to favorites for easy access.
- **Filtering**: Users can filter results by various criteria (e.g., vehicle type, amenities, location).
- **Detailed Information**: Each camper has detailed information available, including description, rating, and reviews.
- **Pagination**: Pagination support for browsing the camper list across multiple pages.

## Technologies

- **React**: For building the user interface.
- **Redux Toolkit**: For state management of the application.
- **React Router**: For routing through pages in the application.
- **Axios**: For API interaction and data fetching.
- **redux-persist**: For persisting the favorite camper state across page reloads.
- **Vite**: A modern, fast build tool for bundling the application during development and production.
- **ESLint**: For identifying and fixing problems in JavaScript code, ensuring code quality.
- **Yup**: For object schema validation, used with Formik to validate form inputs.
- **Formik**: For handling forms in React, simplifying form validation and submission.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/camper-rental-app.git
   ```
2. Navigate into the project directory:
   ```bash
   cd camper-rental-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Project Structure

- **src/components**: UI components (e.g., camper cards, filters, buttons).
- **src/pages**: Application pages (e.g., Home Page, Catalog, Camper Detail Page).
- **src/redux**: Redux store and slices for state management (e.g., campers, favorites, filters).
- **src/api**: Functions for interacting with the API (e.g., fetching camper data).
- **src/images**: Images used in the application (e.g., icons, camper images).
- **src/data**: Data for filters used in the application.

## Development

If you want to make changes to the application or add new features, follow these steps:

1. Fork this repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Make changes and commit:
   ```bash
   git commit -m "Added a new feature"
   ```
4. Push your changes to your repository:
   ```bash
   git push origin feature/new-feature
   ```
5. Create a pull request to merge your changes into the main repository.
