
var { relocateMarbles  } = require('../solution');
var assert = require('assert');
  describe('test_1', function () {
    it('For input nums = [3,4], moveFrom = [4,3,1,2,2,3,2,4,1], moveTo = [3,1,2,2,3,2,4,1,1], the result should be [1]', function () {
      assert.deepEqual( relocateMarbles( [3,4], [4,3,1,2,2,3,2,4,1], [3,1,2,2,3,2,4,1,1]) , [1]);
    });
  });
