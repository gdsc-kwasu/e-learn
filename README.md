# e-learn

e-learn is an electronic learning platform to curate learning materials for members of DSC to enhance personalized learning. This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator which uses react library. &mdash; You can read up the documentation from the official docs page

### Want to contribute? click [here](#contributing)

## Getting Started

Installing the application (as a developer) is simple in the following steps:

- Fork and Clone this repository

```git
git clone https://github.com/kwasu-ng/e-learn && cd e-learn
```

- Make your forked repo the remote upstream (at origin)

```
    git remote add origin https://github.com/kwasu-ng/e-learn.git
```

- Inside the cloned directory, install dependencies with NPM

```npm
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server at `localhost:3300` and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Contributing

Check our guide on how you can contribute to this project [here](CONTRIBUTING.md). Please ensure you read through everything in the contributing guide!