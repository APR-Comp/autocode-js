
var { relocateMarbles  } = require('../solution');
var assert = require('assert');
  describe('Test Number 0', function () {
    it('For input nums = [1,6,7,8], moveFrom = [1,7,2], moveTo = [2,9,5], the result should be [5,6,8,9]', function () {
      assert.deepEqual( relocateMarbles( [1,6,7,8], [1,7,2], [2,9,5]) , [5,6,8,9]);
    });
  });
    