/* eslint-disable no-console */
import Saloimex from '../index';

const key = 'My Key';
console.log('Initialize Saloimex. Key:', key);
Saloimex.init(key);

console.group('Save');
const data = { myKey: 'My Value' };
console.log('Saving data...', data);
Saloimex.save();
console.log('Data saved. Check your local storage.');
console.groupEnd();

console.group('Load');
console.log('Loading data...');
console.log('Data loaded.', Saloimex.load());
console.groupEnd();

console.group('Export');
console.log('Exporting data...');
console.log('Data to export:', data);
const string = Saloimex.export(data);
console.log('Data exported. Result: ', string);
console.groupEnd();

console.group('Import');
console.log('Importing data...:');
console.log('String to import:', string);
const imported = Saloimex.import(string);
console.log('Imported data: ', imported);
console.groupEnd();
