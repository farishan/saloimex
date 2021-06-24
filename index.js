/*
 * Saloimex
 * Faris Han, 2020
 */
class Saloimex {
  /**
   * Saloimex
   * @constructor
   */
  constructor(key) {
    this.key = key ? `${key.toLowerCase().split(' ').join('_')}_data` : 'saloimex_data';
  }

  /**
   * Save stringified JSON to localStorage.
   * @param {object} data - The JSON data.
   * @return {object} data - The passed data.
   */
  save(data) {
    localStorage.setItem(this.key, JSON.stringify(data));

    return data;
  }

  /**
   * Load stringified JSON from localStorage.
   * @return {object} data - The JSON data.
   */
  load() {
    let data = false;

    if (localStorage.getItem(this.key)) {
      data = JSON.parse(localStorage.getItem(this.key));
    }

    return data;
  }

  /**
   * Export JSON to base64.
   * @param {data} data - The JSON data.
   * @return {string} result - The base64 string.
   */
  export(data) {
    this.save(data);

    const result = btoa(JSON.stringify(data));

    return result;
  }

  /**
   * Import base64 string to JSON.
   * @param {string} string - The base64 string.
   * @return {object} data - The JSON data.
   */
  import(string) {
    const data = JSON.parse(atob(string));

    this.save(data);

    return data;
  }
}
