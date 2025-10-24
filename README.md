# Playwright TypeScript Automation Project

This project is an automation framework built using Playwright and TypeScript. It provides a structured approach to writing end-to-end tests for web applications.

## Project Structure

```
playwright-typescript-automation
├── src
│   ├── pages
│   │   └── HomePage.ts        # Contains page object for the home page
│   ├── fixtures
│   │   └── auth.fixture.ts     # Contains authentication setup for tests
│   └── utils
│       └── helpers.ts          # Contains utility functions for tests
├── tests
│   └── example.spec.ts         # Contains example test suite
├── playwright.config.ts         # Configuration file for Playwright
├── package.json                 # NPM configuration file
├── tsconfig.json               # TypeScript configuration file
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd playwright-typescript-automation
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the tests:**
   ```
   npx playwright test
   ```

## Usage Examples

- To run a specific test file:
  ```
  npx playwright test tests/example.spec.ts
  ```

- To run tests in headed mode (with a visible browser):
  ```
  npx playwright test --headed
  ```

## Contributing

Feel free to submit issues or pull requests to improve the project. Make sure to follow the coding standards and include tests for new features.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.