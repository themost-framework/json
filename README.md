[![npm](https://img.shields.io/npm/v/@themost%2Fjson.svg)](https://www.npmjs.com/package/@themost%2Fjson)
![GitHub top language](https://img.shields.io/github/languages/top/themost-framework/json)
[![License](https://img.shields.io/npm/l/@themost/json)](https://github.com/themost-framework/json/blob/master/LICENSE)
![GitHub last commit](https://img.shields.io/github/last-commit/themost-framework/json)
![GitHub Release Date](https://img.shields.io/github/release-date/themost-framework/json)
[![npm](https://img.shields.io/npm/dw/@themost/json)](https://www.npmjs.com/package/@themost%2Fjson)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@themost/json)

![MOST Web Framework Zero Gravity](https://raw.githubusercontent.com/themost-framework/common/master/docs/img/themost_framework_v3_128.png)

# @themost/json
JSON parser extensions for formatting and parsing date values

## Usage

    npm i @themost/json

Extend `JSON.stringify` and `JSON.parse` to use and parse date values with timezone by importing `@themost/json/register` module:

    import {@themost/json/register}

The default result of the native `JSON.stringify()` function:

    {
        "message": "Hello World",
        "createdAt": "2022-12-13T09:27:13.531Z"
    }

will be replaced by the following:

    {
        "message": "Hello World",
        "createdAt": "2022-12-13T10:27:13.531+01:00"
    }

