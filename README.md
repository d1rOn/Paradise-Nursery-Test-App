## Installation

1. Clone the repository
2. Create `.env` file
3. Run `npm install` to install the dependencies in the project directory
4. Go to the `front` directory and install the dependencies with `npm install`
5. Run `npm run dev` to start the development server

   or

   Run `docker-compose -f docker-compose.yml up --build` to build and run the development server

## Scripts

In the `package.json` file, you can find the following scripts:

- `dev`: Runs the development server with `next dev`
- `build`: Builds the application with `next build`
- `start`: Starts the application with `next start`
- `lint`: Lints the project using `next lint`
- `lint-fix`: Lints and fixes the project using `next lint --fix`
- `stylelint`: Lints the stylesheets with `stylelint **/*.scss`
- `stylelint-fix`: Lints and fixes the stylesheets with `stylelint **/*.scss --fix`
- `prettier`: Checks code formatting with `prettier --check .`
- `prettier-fix`: Formats the code with `prettier --write .`
- `type-check`: Checks TypeScript types with `tsc --noEmit`
