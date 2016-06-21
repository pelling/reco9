'use strict';

var reco9 = require('../reco9');
var Promise = require('promise');
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



  it('check that creating person node works', function(done) {
      reco9.loadConfigFile("./test/config.json");
      reco9.createPerson("Chris Pelling", "asdfasdf", function(body){
        expect(Promise.resolve(body.data[0][0].data.id)).to.eventually.equal('asdfasdf').notify(done);
      });
  });

  it('check that creating item node works', function(done) {
      reco9.loadConfigFile("./test/config.json");
      reco9.createItem("ProductA", "bbbnnn", function(body){
        expect(Promise.resolve(body.data[0][0].data.id)).to.eventually.equal('bbbnnn').notify(done);
      });
  });


});
