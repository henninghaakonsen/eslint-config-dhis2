# ESLint configuration DHIS2

The single source for your JS code style rules.

This is a config for [ESLint](http://eslint.org).

The current styleguide is based on the AirBnB styleguide. Refer to the [AirBnb config file](https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v0.0.7/packages/eslint-config-airbnb/.eslintrc) for a view on what this config is based on.

The DHIS2 JS Styleguide differs on a few points which are configured in [our own config](https://github.com/dhis2/eslint-config-dhis2/blob/master/.eslintrc) as overrides

For a more thorough description of the style guide, refer to the [AirBnB guide](https://github.com/airbnb/javascript/tree/eslint-config-airbnb-v0.0.7)

## Usage

### Install
```
npm install --save-dev eslint-config-dhis2
```
or with yarn
```
yarn add eslint-config-dhis2
```

Then add a linting npm script to package.json, "scripts" section:

```
"scripts": {
    "lint": "eslint src"
}
```

### Lint changed files in your project
When you install this package, a node script called _lintchangedfiles.js_ will be added to the node_modules/.bin directory. This script runs eslint on only the changed and untracked files. This is useful for targeting the most relevant files when working on large projects that have lots of errors. To run the script:

```
./node_modules/.bin/lintchangedfiles.js
```

If you prefer, you can also add an npm script to your project for this. For example:
```
"scripts": {
    "lint": "eslint src",
    "lint-changed": "lintchangedfiles.js"
}
``` 
