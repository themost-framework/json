// MOST Web Framework Codename Zero Gravity Copyright (c) 2017-2022, THEMOST LP All rights reserved
export declare function toTimestamp(value:Date): string;
export declare function timestampReplacer(key: string, value: any): string;
export declare function timestampReviver(key: string, value: any): any;

export declare class JSONArray<T> extends Array {
    constructor(iterable? : ArrayLike<T> | Iterable<T>);
}

export declare class JSONArray extends JSONArray<any> {
    constructor(iterable? : ArrayLike<any> | Iterable<any>);
}
export declare class JSONObject extends Object {
    construstor(init?: any);
}