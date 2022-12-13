import { toTimestamp } from '@themost/json';

describe('toTimestamp', () => {

    it('should use toTimestamp', () => {
        expect(() => toTimestamp('2020-12-14')).toThrowError();
        const value = new Date(2022, 11, 14);
        const timestamp = toTimestamp(value);
        expect(timestamp).toBeTruthy();
        expect(new Date(timestamp)).toEqual(value);
    });

});