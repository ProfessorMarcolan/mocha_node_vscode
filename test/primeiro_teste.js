var assert = require('assert');
describe('Array', function() {
    // é um titutlo para melhor organizar a sua aplicação.
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
        // asserte é igual a palavra garantir.
        // a linha a baixo é traduzida para garanta que isso é igual a.
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// mudar os titulos do describe.