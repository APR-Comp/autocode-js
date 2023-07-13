
var { countBlackBlocks  } = require('../solution');
var assert = require('assert');
  describe('Test Number 1', function () {
    it('For input m = 3, n = 3, coordinates = [[0,0],[1,1],[0,2]], the result should be [0,2,2,0,0]', function () {
      assert.deepEqual( countBlackBlocks( 3, 3, [[0,0],[1,1],[0,2]]) , [0,2,2,0,0]);
    });
  });
    