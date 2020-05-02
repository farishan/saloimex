/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
let html; // Unsure what _your code_ needs here -- using `undefined` to trigger default value
const options = { url: 'http://localhost/' };
this.jsdom = require('jsdom-global')(html, options);
const chai = require('chai');

const { expect } = chai;

const Saloimex = require('./index');

it('saloimex should be an object', () => {
  expect(Saloimex).to.be.an('object');
});

it('saloimex.init should be a function', () => {
  expect(Saloimex.init).to.be.a('function');
});

describe('#init()', () => {
  context('without arguments', () => {
    it('should return 201', () => {
      expect(Saloimex.init()).to.equal(201);
    });
  });

  context('with arguments', () => {
    it('should return 200', () => {
      expect(Saloimex.init('my storage key')).to.equal(200);
    });
  });
});

it('saloimex.save should be a function', () => {
  expect(Saloimex.save).to.be.a('function');
});

describe('#save()', () => {
  context('with arguments', () => {
    it('should return 200', () => {
      expect(Saloimex.save({ myData: 'myData to save' })).to.equal(200);
    });
  });

  context('without arguments', () => {
    it('should return 404', () => {
      expect(Saloimex.save()).to.equal(404);
    });
  });
});

it('saloimex.load should be a function', () => {
  expect(Saloimex.load).to.be.a('function');
});

describe('#load()', () => {
  context('without arguments', () => {
    it('should return an object', () => {
      expect(Saloimex.load()).to.be.an('object');
    });
  });
});

it('saloimex.export should be a function', () => {
  expect(Saloimex.export).to.be.a('function');
});

describe('#export()', () => {
  context('without arguments', () => {
    it('should return 404', () => {
      expect(Saloimex.export()).to.equal(404);
    });
  });

  context('with arguments', () => {
    it('should return a string', () => {
      expect(Saloimex.export({ key: 'value' })).to.be.a('string');
    });
  });
});

it('saloimex.import should be a function', () => {
  expect(Saloimex.import).to.be.a('function');
});

describe('#import()', () => {
  context('without arguments', () => {
    it('should return 404', () => {
      expect(Saloimex.import()).to.equal(404);
    });
  });

  context('with arguments', () => {
    it('should return an object', () => {
      const string = Saloimex.export({ key: 'value' });
      expect(Saloimex.import(string)).to.be.an('object');
    });
  });

  context('with empty string arguments', () => {
    it('should return 404', () => {
      expect(Saloimex.import('')).to.equal(404);
    });
  });
});
