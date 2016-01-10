'use strict'

const Trailpack = require('trailpack')

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
    super(app, config)
  }
}
