# Soracard blog

![](./src/public/og.jpg)

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Environment

Env variables required to send email via gmail API:

```
NUXT_GMAIL_CLIENT_ID
NUXT_GMAIL_CLIENT_SECRET
NUXT_GMAIL_REFRESH_TOKEN
NUXT_GMAIL_REDIRECT_URL=https://developers.google.com/oauthplayground
NUXT_GMAIL_USER #sender email address
```

[Here is](https://stateful.com/blog/gmail-api-node-tutorial) an article how to get them

Env variables required for reCAPTCHA:

```
NUXT_RECAPTCHA_SECRET_KEY
NUXT_PUBLIC_RECAPTCHA_SITE_KEY
```

Get them [here](https://www.google.com/recaptcha/admin/create) (Score based (v3))

On local machine you can use `.env` file in the root of the project to scecify the variables

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
