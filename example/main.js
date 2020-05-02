/* eslint-disable */
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

const key = 'My Key';
const saloimex = new Saloimex('My Key');
el('output').innerHTML += `<hr>Initialize Saloimex. Key: ${key}<hr>`;
console.log('Initialize Saloimex. Key:', key);

console.group('Save');
el('output').innerHTML += `<h4>Save</h4>`;
const data = { myKey: 'My Value' };
console.log('Saving data...', data);
el('output').innerHTML += `Saving data... <pre>${JSON.stringify(data, null, 2)}</pre>`;
saloimex.save(data);
console.log('Data saved. Check your local storage.');
el('output').innerHTML += `Data saved. Check your local storage.<hr>`;
console.groupEnd();

console.group('Load');
el('output').innerHTML += `<h4>Load</h4>`;
console.log('Loading data...');
el('output').innerHTML += `Loading data...<br>`;
console.log('Data loaded.', saloimex.load());
el('output').innerHTML += `Data loaded. <pre>${JSON.stringify(saloimex.load(), null, 2)}</pre><hr>`;
console.groupEnd();

console.group('Export');
el('output').innerHTML += `<h4>Export</h4>`;
console.log('Exporting data...');
el('output').innerHTML += `Exporting data...<br>`;
console.log('Data to export:', data);
el('output').innerHTML += `Data to export: <pre>${JSON.stringify(data, null, 2)}</pre><hr>`;
const string = saloimex.export(data);
console.log('Data exported. Result: ', string);
el('output').innerHTML += `Data exported. Result: <pre>${string}</pre><hr>`;
console.groupEnd();

console.group('Import');
el('output').innerHTML += `<h4>Import</h4>`;
console.log('Importing data...:');
el('output').innerHTML += `Importing data...<br>`;
console.log('String to import:', string);
const imported = saloimex.import(string);
console.log('Imported data: ', imported);
el('output').innerHTML += `Imported data: <pre>${JSON.stringify(imported, null, 2)}</pre><hr>`;
console.groupEnd();

function el(id){
  return document.getElementById(id);
};
