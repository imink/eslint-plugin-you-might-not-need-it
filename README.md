# eslint-plugin-test

test

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-test`:

```
$ npm install eslint-plugin-test --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-test` globally.

## Usage

Add `test` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "test"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "test/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


It has to deal with following cases:
1. `if (a.length > 0)`
2. `a.b` or `a.b.c.`
3.
```js
const a = false
const b = a || true // a = true, but we want b = false
```
4. `a.map // what if a is a object`



# online AST parser
https://astexplorer.net/