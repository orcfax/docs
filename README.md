# Orcfax Docs

Orcfax Docs repository.

## Pre-commit

Pre-commit checks will help maintain the quality of this docs repo. They can be
run automatically or manually.

Ensure that pre-commit is installed with `python3 -m pip install pre-commit`.

### Automatically

Run: `pre-commit install`

Pre-commit will then automatically run on any modified files added to Git for
commit.

### Manually

Run pre-commit manually with: `pre-commit run --all-files`.

Check out the local `Makefile` for help running manually by calling `make` from
the root directory.

## Docusurus

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.

### Installation

```bash
npm i
```

or

```bash
yarn
```

### Local Development

```bash
npm start
```

or

```bash
yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```bash
npm build
```

or

```bash
yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to
build the website and push to the `gh-pages` branch.
