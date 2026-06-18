# Blog Site

A modern, fast blog application built with React and Vite. This project provides a minimal setup for a performant blog with hot module replacement (HMR) and ESLint configuration.

## Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** as your package manager
- **Git** (optional, for version control)

To check if you have Node.js installed, run:
```bash
node --version
npm --version
```

## Installation

Follow these steps to get the project up and running:

### 1. Clone or Download the Repository

```bash
git clone <repository-url>
cd blog-site
```

### 2. Navigate to the Project Directory

```bash
cd blog-site
```

### 3. Install Dependencies

Install all required packages:

```bash
npm install
```

Or if you prefer yarn:
```bash
yarn install
```

## Running Locally

### Start the Development Server

To run the project in development mode with hot reload:

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

The application will start on `http://localhost:5173` (or another available port). Open this URL in your browser to see the blog site.

The development server supports:
- **Hot Module Replacement (HMR)** - Changes automatically reflect in the browser without full page reload
- **Fast Refresh** - React components update instantly during development

## Available Scripts

### `npm run dev`
Starts the development server with hot reload. Best for development.

### `npm run build`
Creates an optimized production build in the `dist/` directory.

```bash
npm run build
```

### `npm run preview`
Previews the production build locally (run `build` first).

```bash
npm run preview
```

### `npm run lint`
Runs ESLint to check for code quality issues.

```bash
npm run lint
```

## Project Structure

```
blog-site/
├── src/
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles
│   └── assets/              # Static assets
├── public/                  # Static files
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Project dependencies
└── README.md               # This file
```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist/` folder with optimized files ready for deployment. The build is minified and optimized for performance.

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the actual URL.

### Dependencies Not Installing

If you encounter issues installing dependencies:

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -r node_modules package-lock.json

# Reinstall
npm install
```

### Hot Reload Not Working

Ensure your browser supports ES modules. Try:
1. Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Restart the development server

### ESLint Errors

To fix common linting issues automatically:

```bash
npm run lint -- --fix
```

## Tech Stack

- **React 19** - UI library
- **Vite 8** - Build tool and dev server
- **Vite React Plugin** - React support in Vite
- **ESLint** - Code quality tool

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Vite React Plugin](https://github.com/vitejs/vite-plugin-react)
- [ESLint](https://eslint.org)

## Notes

- The React Compiler is not enabled by default due to performance impacts. See [React Compiler documentation](https://react.dev/learn/react-compiler/installation) if you want to enable it.
- For production applications with TypeScript support, consider using the TypeScript template.

## Support

For issues or questions, refer to the official documentation or create an issue in the repository.
