
var { numberOfGoodSubarraySplits  } = require('../solution');
var assert = require('assert');
  describe('Test Number 0', function () {
    it('For input nums = [0,1,0,0,1], the result should be 3', function () {
      assert.deepEqual( numberOfGoodSubarraySplits( [0,1,0,0,1]) , 3);
    });
  });
    