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

