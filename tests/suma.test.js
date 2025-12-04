const { test, strictEqual } = require('node:test');
const { suma } = require('../src/app');

test('la suma debe funcionar', () => {
  strictEqual(suma(2, 3), 5);
});
