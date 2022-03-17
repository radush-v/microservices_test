import request from 'supertest';
import { producer } from '../index';

jest.mock('./produce');

describe('POST /send', () => {
    describe('Consists fileUrl', () => {
        test('Return 200', done => {
            request(producer).post('/send').send(
                { "fileUrl": "someUrl" }
            ).end(err => {
                err ? expect(500) : expect(200)
                done();
            })
        })
    })

    describe("Doesn't consist url", () => {
        test('Return 400', async () => {
            const response = await request(producer).post('/send').send({});
            expect(response.statusCode).toBe(400);
        })
    })

})




