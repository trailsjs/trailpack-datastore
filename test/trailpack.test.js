'use strict'

const assert = require('assert')

describe('Datastore Trailpack', () => {
  let pack

  before(() => {
    pack = global.app.packs.datastoretest
  })

  it('should load', () => {
    assert(pack)
  })

})
