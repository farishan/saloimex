/*
 * Saloimex
 * Faris Han, 2020
 *
 * TODO: Fix unit testing. Clean up the code.
 */

(function saloimex() {
  let privateKey = 'default_key_data';

  const Saloimex = {
    /**
     * Initialize
     *
     * @param {String} key
     *   Unique key for local storage
     */
    init(key) {
      if (key) {
        privateKey = `${key.toLowerCase().split(' ').join('_')}_data`;
        return 200;
      }

      return 201;
    },

    /**
     * Save the data
     *
     * @param {Object} data
     *   The data object
     */
    save(data) {
      if (!data) {
        return 404;
      }
      /* istanbul ignore next */
      if (localStorage) {
        /* istanbul ignore next */
        localStorage.setItem(privateKey, JSON.stringify(data));
      }
      /* istanbul ignore next */
      return 200;
    },

    /**
     * Load the data
     *
     * @return {Object} data
     *   The data object
     */
    load() {
      let data = false;
      /* istanbul ignore next */
      if (localStorage.getItem(privateKey)) {
        /* istanbul ignore next */
        data = JSON.parse(localStorage.getItem(privateKey));
      } else {
        return 404;
      }
      /* istanbul ignore next */
      return data;
    },

    /**
     * Export the data to base64 string
     *
     * @return {Object} data
     *   The data object
     */
    export(data) {
      if (data) {
        this.save(data);
        /* istanbul ignore next */
        const result = btoa(JSON.stringify(data));
        /* istanbul ignore next */
        return result;
      }
      return 404;
    },

    /**
     * Import the data from base64 string
     *
     * @return {String} Stringified JSON data
     *   The data object
     */
    import(dataString) {
      if (dataString) {
        /* istanbul ignore next */
        const data = JSON.parse(atob(dataString));
        /* istanbul ignore next */
        this.save(data);
        /* istanbul ignore next */
        return data;
      }
      return 404;
    },
  };

  // AMD support
  /* istanbul ignore next */
  // eslint-disable-next-line no-undef
  if (typeof define === 'function' && define.amd) {
    /* istanbul ignore next */
    // eslint-disable-next-line no-undef
    define(Saloimex);
  // eslint-disable-next-line brace-style
  }
  // CommonJS support
  else if (typeof module === 'object' && module !== null && typeof module.exports === 'object') {
    module.exports = Saloimex;
  }
}(this));
