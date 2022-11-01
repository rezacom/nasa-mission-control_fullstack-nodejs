import { describe, expect, test } from '@jest/globals';
import app from '../../app';
import request from "supertest"

describe("Test GET /launches", () => {
    test("Is shold respond whith 200 success", async () => {
        await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe("Test POST /launches", () => {

    const complateData = {
        mission: 'Kepler Exploration X',
        rocket: 'Explorer IS1',
        launchDate: 'December 27, 2030',
        target: 'Kepler-442 b',
    };
    const resultData = {
        mission: 'Kepler Exploration X',
        rocket: 'Explorer IS1',
        target: 'Kepler-442 b',
    };

    test("Is shold respond whith 201 created", async () => {
        const response = await request(app)
            .post('/launches')
            .send(complateData)
            .expect('Content-Type', /json/)

        const complateLaunchDate = new Date(complateData.launchDate).valueOf();
        const reslutLaunchDate = new Date(response.body.launchDate).valueOf();
        
        expect(complateLaunchDate).toBe(reslutLaunchDate)

        expect(response.body).toMatchObject(resultData)
    })

    test("Is shold catch missing required propertise", async () => {
        const response = await request(app)
            .post('/launches')
            .send(resultData)
            .expect('Content-Type', /json/)
            .expect(400)


        expect(response.body).toStrictEqual({
            error: "Launch Properti Is Required"
        })
    })
})