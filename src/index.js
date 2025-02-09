// MOST Web Framework Codename Zero Gravity Copyright (c) 2017-2022, THEMOST LP All rights reserved

const ISO_DATE_REGEX = /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/gm;

const TIMESTAMP_REGEX = /^\d{4}-[01]\d-[0-3]\d[T][0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|[+-][0-9]\d:[0-9]\d)$/gm;

/**
 * Checks if the given value is an ISO date formatted string
 * @param {*} value 
 * @returns {boolean}
*/
function isDateString(value) {
    return typeof value === 'string' && value.match(ISO_DATE_REGEX) != null;
}


function isTimestampString(value) {
    return typeof value === 'string' && value.match(TIMESTAMP_REGEX)  != null;
}

function zeroPad(number, length) {
    number = number || 0;
    var res = number.toString();
    while (res.length < length) {
        res = '0' + res;
    }
    return res;
}

/**
 * Converts the given date to a timestamp formatted string
 * @param {Date} val
 * @returns {string}
 */
function toTimestamp(val) {
        var val;
        if ((val instanceof Date) === false) {
            throw new TypeError('Expected date.');
        }
        const year = val.getFullYear();
        const month = zeroPad(val.getMonth() + 1, 2);
        const day = zeroPad(val.getDate(), 2);
        const hour = zeroPad(val.getHours(), 2);
        const minute = zeroPad(val.getMinutes(), 2);
        const second = zeroPad(val.getSeconds(), 2);
        const millisecond = zeroPad(val.getMilliseconds(), 3);
        const offset = val.getTimezoneOffset();
        const timezone = (offset <= 0 ? '+' : '-') + zeroPad(-Math.floor(offset / 60), 2) + ':' + zeroPad(offset % 60, 2);
        return year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second + '.' + millisecond + timezone;
}

/**
 * A JSON replacer method that converts ISO formatted date string to date string with timezone
 * @param {string} key 
 * @param {*} value 
 * @returns 
 */
function timestampReplacer(key, value) {
    if (isDateString(value)) {
        return toTimestamp(new Date(value));
    }
    return value;
}

/**
 * A JSON reviver which parses date strings with timezones e.g. 2020-12-14T12:45:00.000+02:00
 * @param {string} key 
 * @param {*} value 
 * @returns 
 */
function timestampReviver(key, value) {
    if (isTimestampString(value)) {
        return new Date(value);
    }
    return value;
}


class JSONArray extends Array {
    /**
     * @param {{Iterable<*>|ArrayLike<*>} iterable 
     */
    constructor(iterable) {
        super();
        if (iterable) {
            this.push(...iterable);
        }
    }
    /**
     * @param {(string|number)=} space 
     * @returns {string}
     */
    toString(space) {
        return JSON.stringify(this, timestampReplacer, space);
    }
}

class JSONObject extends Object {
    /**
     * @param {Object=} init
     */
    constructor(init) {
        super();
        if (typeof init === 'object') {
            for (let key of Object.keys(init)) {
                this[key] = init[key];
            }
        }
    }
    /**
     * @param {(string|number)=} space 
     * @returns {string}
     */
    toString(space) {
        return JSON.stringify(this, timestampReplacer, space);
    }
}


export {
    toTimestamp,
    timestampReplacer,
    timestampReviver,
    JSONArray,
    JSONObject
}