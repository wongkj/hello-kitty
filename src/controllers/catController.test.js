const { getCats } = require('./catController')
const axios = require('axios')

jest.mock('axios')

describe('getCats', () => {

  const req = {
    query: {
      type: 'child_friendly'
    }
  }

  describe('successfully returned cats', () => {

    test('return 200 Success if correct type provided', async () => {

      const cats = [
        { name: 'feline', child_friendly: 3 }, 
        { name: 'kitty', child_friendly: 4 },
        { name: 'kitten', child_friendly: 2 },
        { name: 'cat in the hat', child_friendly: 1 },
        { name: 'catty', child_friendly: 2 }
      ]
      const resp = { data: cats };
      axios.get.mockResolvedValue(resp)

      const mockResponse = {
        status: code => ({
          json: message => ({ code, message })
        })
      };
      const expectedResult = {
        status: 'success',
        type: 'child_friendly',
        qty: 5
      }
      const result = await getCats(req, mockResponse)

      expect(result.message).toMatchObject(expectedResult)
    })

  })

  describe('failed to return cats', () => {

    beforeEach(() => {
      jest.resetAllMocks()
    })
  
    test('return 400 Bad Request if no type is provided', async () => {
      const noTypeProvidedReq = {
        ...req,
        query: {
          type: null
        }
      }

      const expectedResult = {
        status: 'Bad Request',
        message: `Query String Parameter 'type' must be provided.`
      }
      const mockResponse = {
        status: code => ({
          json: message => ({ code, message })
        })
      };

      const result = await getCats(noTypeProvidedReq, mockResponse);
      expect(result.code).toBe(400)
      expect(result.message).toMatchObject(expectedResult)
    })

    test('return 400 Bad Request if incorrect bird_friendly type is provided', async () => {
      const incorrectTypeProvidedReq = {
        ...req,
        query: {
          type: 'bird_friendly'
        }
      }

      const expectedResult = {
        status: 'Bad Request',
        message: `Query String Parameter 'type' must be either 'child_friendly', 'dog_friendly', or 'stranger_friendly'.`
      }
      const mockResponse = {
        status: code => ({
          json: message => ({ code, message })
        })
      };

      const result = await getCats(incorrectTypeProvidedReq, mockResponse);
      expect(result.code).toBe(400)
      expect(result.message).toMatchObject(expectedResult)
    })

  })

})
