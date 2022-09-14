/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/*
 * Saloimex
 * Faris Han, 2020
 */

/* eslint-disable-next-line no-unused-vars */
class Saloimex {
  /**
   * Saloimex
   * @constructor
   */
  constructor(key, isDebug) {
    this.version = '0.0.1';
    this.key = key ? `${key.toLowerCase().split(' ').join('_')}_data` : 'saloimex_data';

    // Version Logger
    // eslint-disable-next-line no-console
    if (isDebug) console.info(`saloimex v${this.version}`);
  }

  /**
   * Save stringified JSON to localStorage.
   * @param {object} data - The JSON data.
   * @return {object} data - The passed data.
   */
  save(data) {
    if (data && data !== null) {
      localStorage.setItem(this.key, JSON.stringify(data));
    } else {
      console.error("Invalid data. 'save' method need a JSON data.", { data });
    }

    return data;
  }

  /**
   * Load stringified JSON from localStorage.
   * @return {object} data - The JSON data.
   */
  load() {
    let data;

    const item = localStorage.getItem(this.key);

    if (item && item !== null) {
      data = JSON.parse(item);
    } else {
      console.error('Failed to load data.', { item });
    }

    return data;
  }

  /**
   * Export JSON to base64.
   * @param {data} data - The JSON data.
   * @return {string} result - The base64 string.
   * @todo
   *  [] add options for export without saving
   */
  export(data) {
    let result;

    if (data && data !== null) {
      this.save(data);
      result = btoa(JSON.stringify(data));
    } else {
      console.error('Invalid data. "export" method need a JSON data.');
    }

    return result;
  }

  /**
   * Import base64 string to JSON.
   * @param {string} string - The base64 string.
   * @return {object} data - The JSON data.
   */
  import(string) {
    let data;

    if (string && string !== '') {
      data = JSON.parse(atob(string));
      this.save(data);
    } else {
      console.error('Invalid string. "import" method need a base64 string.');
    }

    return data;
  }
}
