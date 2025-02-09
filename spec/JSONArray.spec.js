import { toTimestamp, JSONArray, JSONObject } from '@themost/json';

describe('JSONArray', () => {

    it('should use JSONArray', () => {
        const arr = new JSONArray();
        arr.push(new Date(2022, 11, 14));
        const json = arr.toString();
        const value = toTimestamp(new Date(2022, 11, 14));
        expect(json).toEqual(`["${value}"]`);
    });

    it('should use JSONObject', () => {
        const obj = new JSONObject({
            value: new Date(2022, 11, 14)
        });
        expect(obj.value).toEqual(new Date(2022, 11, 14));
        expect(obj instanceof JSONObject).toBeTruthy();
        const json = obj.toString();
        expect(json).toEqual(`{"value":"${toTimestamp(new Date(2022, 11, 14))}"}`);
    });

});