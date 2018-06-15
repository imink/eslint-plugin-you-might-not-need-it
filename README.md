# eslint-plugin-test

test

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-you-might-not-need-it`:

```
$ npm install eslint-plugin-you-might-not-need-it --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-test` globally.

## Usage

Add `test` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "you-might-not-need-it"
  ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "you-might-not-need-it/property-undefined": "warn",
    "you-might-not-need-it/safely-if-check": "warn",
  }
}
```

## Supported Rules TO BE CONTINUED

It has to deal with following cases:

1. you need to check undefined of nested object
2. make sure it is the array type before you use the array method
3. avoid ambiguous if statement

# online AST parser
https://astexplorer.net/