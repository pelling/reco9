'use strict';

var reco9 = require('../reco9');

var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


describe('#reco9 tests', function() {


  it('check that loading config file works', function() {
      reco9.loadConfigFile("./test/config.json");
      expect(reco9.neo4jConfig.connectionUri).to.equal('http://reco9:qR3kitIKKkYTUHGRcT3D@reco9.sb10.stations.graphenedb.com:24789');
  });

  it('check that loading db works', function() {
      reco9.loadConfigFile("./test/config.json");
      reco9.loadDb(function(){
        expect(typeof reco9.db).to.equal('object');
      });

  });

  it('check that creating node works', function(done) {
      reco9.loadConfigFile("./test/config.json");
      reco9.loadDb(function(){
        reco9.createNode(function(nodeId){
          expect(Promise.resolve(typeof nodeId)).to.eventually.equal('number').notify(done);
        });
      });

  });


});
