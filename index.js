'use strict'

const _ = require('lodash')
const Trailpack = require('trailpack')
const lib = require('./lib')

/**
 * Datastore Trailpack
 *
 * Datastores should inherit from this Trailpack in order to provide consistent
 * API for all datastores.
 */
module.exports = class DatastoreTrailpack extends Trailpack {

  constructor (app, config) {
    if (!config) {
      throw new Error('trailpack-datastore must be subclassed. Do not load it directly.')
    }
    super(app, _.defaultsDeep(config, { api: require('./api') }))
  }

  initialize () {
    lib.Util.assignModelStores(this.app)
  }
}

