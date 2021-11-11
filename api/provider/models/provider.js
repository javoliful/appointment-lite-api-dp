'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
 const uuid = require('uuid');

 module.exports = {
    /**
     * Triggered before user creation.
     */

    lifecycles: {
      async beforeCreate(data) {
       console.log(data);
        data.providerUUID=uuid();
      },
    },
  };
   