/*
 * Saloimex
 * Faris Han, 2020
 *
 * TODO: Fix unit testing. Clean up the code.
 */

(function saloimex() {
  let privateKey = 'default_key_data';
  let localStorage = undefined;

  const Saloimex = {
    /**
     * Initialize
     *
     * @param {Object} storage
     *   Browser's localStorage
     * @param {String} key
     *   Unique key for local storage
     */
    init(storage, key) {
      if (typeof storage === 'string') {
        console.error('Wrong first parameter. Should be browser localStorage object.');
        return 400;
      } else {
        if (storage && !storage.getItem) {
          console.error('Storage getItem method not detected.');
          return 400;
        }
      }

      if (storage && key) {
        localStorage = storage;
        privateKey = `${key.toLowerCase().split(' ').join('_')}_data`;
        return 200;
      } else if (storage && !key) {
        localStorage = storage;
        return 201;
      } else {
        return 404;
      }
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
     * @param {Object} data
     *   The data object
     * @return {String} base64
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
     * @param {String} string JSON data
     *   The stringified data object
     * @return {Object} JSON data
     */
    import(string) {
      if (string) {
        /* istanbul ignore next */
        const data = JSON.parse(atob(string));
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
