const fs = require('fs');
const request = require('request');
import { download } from '../consumer/download';

jest.mock('request');
jest.mock('fs');

describe('Downloading files...', () => {
    test('Incorrect inputs', () => {
        expect(() => download('iamfalselink')).toThrowError();
    })

    test('Correct working', () => {
        request.head = jest.fn().mockImplementation((link, filename, callback) => {
            callback(link)
        })
    })
})