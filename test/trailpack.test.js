'use strict'

const assert = require('assert')
const DatastoreTrailpack = require('../')
const Trailpack = require('trailpack')

describe('Datastore Trailpack', () => {
  let pack

  before(() => {
    pack = global.app.packs.datastoretest
  })

  it('should load', () => {
    assert(pack)
  })
  it('should be an instance of Trailpack', () => {
    assert(pack instanceof Trailpack)
  })
  it('should be an instance of DatastoreTrailpack', () => {
    assert(pack instanceof DatastoreTrailpack)
  })

})
