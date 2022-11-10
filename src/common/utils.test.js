const { checkType } = require('./utils')

describe('checkType', () => {
  describe('true', () => {
    test('correct type provided return true', () => {
      const correctType = 'child_friendly';
      expect(checkType(correctType)).toBeTruthy()
    })
  })

  describe('false', () => {
    test('incorrect type provided returns false', () => {
      const incorrectType = 'childz_friendly';
      expect(checkType(incorrectType)).toBeFalsy();
    })
  })
})