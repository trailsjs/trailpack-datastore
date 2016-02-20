/* global describe, it */

const assert = require('assert')

describe('DatastoreService', () => {
  it('should exist', () => {
    assert(global.app.api.services['DatastoreService'])
  })
})
