
var { relocateMarbles  } = require('../solution');
var assert = require('assert');
  describe('Test Number 1', function () {
    it('For input nums = [1,1,3,3], moveFrom = [1,3], moveTo = [2,2], the result should be [2]', function () {
      assert.deepEqual( relocateMarbles( [1,1,3,3], [1,3], [2,2]) , [2]);
    });
  });
    