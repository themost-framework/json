import '@themost/json/register';

describe('JSON.stringify', () => {

    it('should use stringify', () => {
        const item = {
            message: 'Hello World',
            createdAt: new Date(),
            number: 5.95,
            value1: null,
            value2: String('test')
        };
        const str = JSON.stringify(item);
        expect(str).toBeTruthy();
        const clone = JSON.parse(str);
        expect(clone.message).toEqual(item.message);
        expect(clone.createdAt).toEqual(item.createdAt);
        expect(clone.number).toEqual(item.number);
        expect(clone.value1).toEqual(item.value1);
        expect(clone.value2).toEqual(item.value2);
    });

    it('should use stringify with replacer', () => {
        const item = {
            message: 'Hello World',
            createdAt: new Date(),
            modifiedAt: new Date()
        };
        const str = JSON.stringify(item, function(key, value) {
            if (key === 'message') {
                return 'Hello';
            }
            return value;
        });
        expect(str).toBeTruthy();
        const clone = JSON.parse(str, function(key, value) {
            if (key === 'message') {
                return 'Hello World!'
            }
            return value;
        });
        expect(clone.message).toEqual('Hello World!');
        expect(clone.createdAt).toEqual(item.createdAt);
        expect(clone.modifiedAt).toEqual(item.modifiedAt);
        
    });

});