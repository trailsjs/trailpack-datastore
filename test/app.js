'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')
const DatastoreTrailpack = require('..')

const TestPack = class TestPack extends DatastoreTrailpack {
  constructor (app) {
    super(app, {
      pkg: {
        name: 'trailpack-datastoretest'
      }
    })
  }
}

module.exports = _.defaultsDeep({
  pkg: {
    name: 'datastore-trailpack-test'
  },
  config: {
    main: {
      packs: [
        TestPack
      ]
    }
  }
}, smokesignals.FailsafeConfig)

