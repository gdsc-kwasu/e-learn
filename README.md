# e-learn

e-learn is an electronic learning platform to curate learning materials for members of DSC to enhance personalized learning. This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator which uses react library. &mdash; You can read up the documentation from the official docs page

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

## Contributing.

- Before contributing, ensure you create a branch for a particular feature you'd want to work on, so we wouldn't be having issues of merge conflict
- You can create a branch this way;

```git
        git checkout -b [branch-name]
```

- Make your changes, add them and make your commits

  ```
  git commit -m "your message"
  ```

  Write good commit messages as this is important to know the essence of your commit

- When you're done with your fixes push to that current branch

```git
        git push origin [name-of-branch]
```

- The command above pushes your your commits to the current branch you're in.
- Then make your Pull Request to the dev branch

## Commit Structure

- type: subject e.g body, footer

The title consists of the type of the message and subject.
The type is contained within the title and can be one of these types:

- feat: a new feature

- fix: a bug fix

- docs: changes to documentation

- style: formatting, missing semi colons, etc; no code change

- refactor: refactoring production code

- test: adding tests, refactoring test; no production code change

An example of a good commit message

```
    feat: Make login check for email and password
```

> Happy Hacking !!!
