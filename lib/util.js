'use strict'

const _ = require('lodash')

module.exports = {

  /**
   * Set each model's "store" property.
   *
   * @param models A list of models
   * @config the application config
   */
  assignModelStores (models, config) {
    _.each(models, model => {
      const modelConfig = model.constructor.config() || { }
      const store = modelConfig.store || config.database.models.defaultStore

      model.store = store
    })
  }
}

