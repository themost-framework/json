import {resolve} from 'path';
require('module-alias').addAliases({
    "@themost/json/register": resolve(process.cwd(), "register/src/index"),
    "@themost/json": resolve(process.cwd(), "src/index")
})