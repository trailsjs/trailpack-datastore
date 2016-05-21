'use strict'

const _ = require('lodash')

module.exports = {

  /**
   * Set each model's "store" property.
   *
   * @param models A list of models
   * @config the application config
   */
  assignModelStores (app) {
    _.each(app.models, model => {
      const modelConfig = model.constructor.config(app) || { }
      const store = modelConfig.store || app.config.database.models.defaultStore

      model.store = store
    })
  }
}

