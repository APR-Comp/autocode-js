
var { countBlackBlocks  } = require('../solution');
var assert = require('assert');
  describe('Test Number 0', function () {
    it('For input m = 3, n = 3, coordinates = [[0,0]], the result should be [3,1,0,0,0]', function () {
      assert.deepEqual( countBlackBlocks( 3, 3, [[0,0]]) , [3,1,0,0,0]);
    });
  });
    