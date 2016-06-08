'use strict';

var expect = require('chai').expect;
var reco9 = require('../reco9');

describe('#reco9', function() {
  it('should add reco9 to the param', function() {
    var result = reco9('test1');
    expect(result).to.equal('reco9test1');

  });

});
