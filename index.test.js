const app = require('./app')
const request = require('supertest')

describe('GET /api/v1/cats', () => {
  describe('given correct querystring parameters provided', () => {
    test('correct type of child_friendly is provided', async () => {
      const response = await request(app).get('/api/v1/cats?type=child_friendly')
      expect(response.statusCode).toBe(200)
    })
    test('correct type of dog_friendly is provided', async () => {
      const response = await request(app).get('/api/v1/cats?type=dog_friendly')
      expect(response.statusCode).toBe(200)
    })
    test('should specify json in teh content type header', async () => {
      const response = await request(app).get('/api/v1/cats?type=child_friendly')
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
    })  
  })
  describe('given incorrect querystring parameters provided', () => {
    test('incorrect type of bird_friendly is provided', async () => {
      const response = await request(app).get('/api/v1/cats?type=bird_friendly')
      expect(response.statusCode).toBe(400)
    })
  })
})