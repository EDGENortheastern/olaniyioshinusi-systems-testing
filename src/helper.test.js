import {
    convertToNum,
    convertToFarenheit
} from './helper.js';

describe("tests the function convertToNum", () => {
    test("that convertToNum converts stringified numbers", () => {
        expect(typeof convertToNum('3')).toBe('number');
    });
});