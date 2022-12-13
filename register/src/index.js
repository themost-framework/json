
import { timestampReplacer, timestampReviver } from '@themost/json';
let superStringify;
let superParse;
// register only once
if (typeof superStringify !== 'function') {
    // get original method
    superStringify = JSON.stringify;
    // override JSON.stringify
    JSON.stringify = function(value, replacer, space) {
        if (replacer == null) {
            // execute date replacer
            return superStringify(value, timestampReplacer, space);
        } else {
            // wrap replacer to execute date replacer
            return superStringify(value, function(key, value) {
                return replacer.call(this, key, timestampReplacer.call(this, key, value));
            }, space);
        }
    }
    superParse = JSON.parse;
    JSON.parse = function(text, reviver) {
        if (reviver == null) {
            // execute date replacer
            return superParse(text, timestampReviver);
        } else {
            // wrap reviver
            return superParse(text, function(key, value) {
                const intermediateValue = timestampReviver.call(this, key, value);
                if (intermediateValue !== value) {
                    return intermediateValue;
                }
                return reviver.call(this, key, value);
            });
        }
    }
}