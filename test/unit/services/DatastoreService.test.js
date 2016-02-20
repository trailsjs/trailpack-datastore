/* global describe, it */

const assert = require('assert')

describe('DatastoreService', () => {
  it('should exist', () => {
    assert(global.app.api.services['DatastoreService'])
  })
  it('should throw a "must implement in subclass" error', () => {
    const DatastoreService = new global.app.api.services.DatastoreService()
    assert.throws(() => DatastoreService.select(), /must be overridden/)
    assert.throws(() => DatastoreService.insert(), /must be overridden/)
    assert.throws(() => DatastoreService.update(), /must be overridden/)
    assert.throws(() => DatastoreService.delete(), /must be overridden/)
  })
})
