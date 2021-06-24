/* eslint-disable */
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
