# Playwright Test Automation Project

This project contains browser automation tests built with Playwright. It is designed for end-to-end testing of web applications, UI validation, and automated regression checks.

## Features

- Cross-browser testing with Playwright
- Fast test execution with parallel support
- Built-in waiting and retry mechanisms
- Screenshot and video capture on failures
- Easy local and CI execution
- Test reports for debugging and review

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js 18 or later
- npm
- A modern browser runtime (Playwright will install browsers automatically)

## Installation

Open a terminal in the project root and run:

```bash
npm install
```

Then install the Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.js
```

Run tests in headed mode (with browser UI visible):

```bash
npx playwright test --headed
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

## Viewing the HTML Report

After a test run, open the generated test report:

```bash
npx playwright show-report
```

## Project Structure

```text
.
├── tests/                 # Test files
├── test-results/          # Test execution output
├── playwright.config.js   # Playwright configuration
├── package.json           # Project scripts and dependencies
├── README.md              # Project documentation
└── .github/               # GitHub workflows (if added)
```

## Common Commands

```bash
# Run tests
npx playwright test

# Open Playwright UI mode
npx playwright test --ui

# Generate code for test recording
npx playwright codegen

# Check Playwright version
npx playwright --version
```

## Configuration

The project configuration is defined in `playwright.config.js`. You can configure:

- test directory
- timeout settings
- retries
- parallelism
- base URL
- browsers
- reporters

## Notes

- Use `page.locator()` for reliable element queries.
- Prefer explicit waits instead of fixed delays.
- Keep tests independent and deterministic.
- Use screenshots and traces for debugging failures in CI.

## License

This project is for internal or personal use unless a different license is specified.

## Contributing

If you want to extend the test suite:

1. Create a new test file under `tests/`
2. Follow the existing test structure and naming conventions
3. Run the relevant tests locally before committing
4. Update this README if the workflow changes
