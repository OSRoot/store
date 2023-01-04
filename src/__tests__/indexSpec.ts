import supertest from "supertest";
import app from "..";

const request = supertest(app);

describe("Test my first endpoint", ()=>{
    it("Check my / endpoint functionality: ", async()=>{
        const response = await request.get('/');
        expect(response.status).toBe(200)
    })
})