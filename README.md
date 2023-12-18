# Petpooja Webhooks

## Get Started

To get started for this project, Follow the below steps.

1. Install NPM Packages

```bash
npm install
```

2. Update Env File

```bash
cp .env.sample .env
```

3. Update Environment Variables in `.env` file.

4. Run Local Development Server

```bash
npm run dev
```

## Todos

- We can create express middleware for much better body validation and error handling for our webhooks to improve code quality.
- It looks like error responses of most of webhooks contain same keys and same error format. Hence we can reduce code duplicacy.
- Create a list of all routes.
