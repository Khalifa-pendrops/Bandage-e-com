# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## E-Com Application
This is a simple e-commerce application built using React and Vite, styled with vanilla CSS, and utilizing React Router for routing.

The application fetches data from a dummy JSON API using Redux Toolkit (RTK) and RTK Query.


#Table of Contents

Features

Installation

Usage

Project Structure

Contributing

License


# Features

React with Vite: Fast and efficient development environment.

Vanilla CSS: Simple and straightforward styling.

React Router: Declarative routing for React applications.

Redux Toolkit & RTK Query: State management and data fetching made easy.

Dummy JSON API: Simulated backend data for development purposes.


# Installation

Clone the repository:

git clone https://github.com/Khalifa-pendrops/Bandage-e-com.git

cd e-com-app


# Install dependencies:

npm install


# Start the development server:

npm run dev

# API Documentation

https://dummyjson.com/docs/products

# Usage
Run the application:

Open your browser and navigate to http://localhost:5175.


# Build for production:

npm run build


# Preview the production build:

npm run serve

# Project Structure

bandage/
├── public/                # Public assets
├── src/
│   ├── api/               # API calls and RTK Query services
│   ├── components/        # Reusable components
│   ├── features/          # Redux slices and RTK Query endpoints
│   ├── pages/             # Application pages
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global CSS
│   ├── main.jsx           # Application entry point
├── .gitignore             # Git ignore file
├── index.html             # HTML template
├── package.json           # NPM scripts and dependencies
├── README.md              # Project documentation
├── vite.config.js         # Vite configuration


# Contributing

Contributions are welcome! Please follow these steps to contribute:

Fork the repository.

Create a new branch: git checkout -b my-feature-branch.

Make your changes and commit them: git commit -m 'Add some feature or commit message'.

Push to the branch: git push origin my-feature-branch.

Submit a pull request.








