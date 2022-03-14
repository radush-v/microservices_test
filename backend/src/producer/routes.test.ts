import { response } from 'express';
import request from 'supertest';
import { producer } from '../index'

describe('POST /send', () => {
    describe('Consists fileUrl', () => {
        test('Return 200', async () => {
            const response = await request(producer).post('/send').send(
                {
                    "fileUrl": "someUrl"
                }
            )
        })
        expect(response.statusCode).toBe(200);
    })

    // describe("Doesn't consist url", () => {
    //     test('Return 400', async () => {
    //         const response = await request(producer).post('/send').send()
    //     })
    //     expect(response.statusCode).toBe(400);
    // })

})

    


