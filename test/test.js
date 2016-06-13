'use strict';

var expect = require('chai').expect;
var reco9 = require('../reco9');

describe('#reco9 tests', function() {


  it('check that loading config file works', function() {
      reco9.loadConfigFile("./config.json");
      expect(reco9.neo4j.connectionUri).to.equal('asdf');
  });



});
