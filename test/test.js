'use strict';

var reco9 = require('../reco9');
var Promise = require('promise');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
var connectionUri = 'http://reco9:qR3kitIKKkYTUHGRcT3D@reco9.sb10.stations.graphenedb.com:24789';
chai.use(chaiAsPromised);


describe('#reco9 tests', function() {



  it('check that loading connectionUri loads correctly', function() {
      reco9.loadConnectionUri(connectionUri);
      expect(reco9.connectionUri).to.equal(connectionUri);
  });


  it('check that creating db contraint on Person Id works', function(done) {
      this.timeout(10000);
      reco9.loadConnectionUri(connectionUri);
      reco9.createPersonIdConstraint(function(error, body){
        expect(Promise.resolve(error)).to.eventually.equal(null);
        expect(Promise.resolve(Object.keys(body))).to.deep.eventually.equal(['columns','data']).notify(done);
      });
  });

  it('check that creating db contraint on Item Id works', function(done) {
      this.timeout(10000);
      reco9.loadConnectionUri(connectionUri);
      reco9.createItemIdConstraint(function(error, body){
        expect(Promise.resolve(error)).to.eventually.equal(null);
        expect(Promise.resolve(Object.keys(body))).to.deep.eventually.equal(['columns','data']).notify(done);
      });
  });


  it('check that creating person node works', function(done) {
      this.timeout(10000);
      reco9.loadConnectionUri(connectionUri);
      reco9.createPerson("Bob Calhoun", "bobby", function(error, body){
        expect(Promise.resolve(error)).to.eventually.equal(null);
        expect(Promise.resolve(body.data[0][0].data.id)).to.eventually.equal('bobby').notify(done);
      });
  });


  it('check that deleting person node works', function(done) {
      this.timeout(10000);
      reco9.loadConnectionUri(connectionUri);
      reco9.deletePerson("bobby", function(error, body){
        expect(Promise.resolve(error)).to.eventually.equal(null);
        expect(Promise.resolve(Object.keys(body))).to.deep.eventually.equal(['columns','data']).notify(done);
      });
  });

  it('check that creating item node works', function(done) {
      this.timeout(10000);
      reco9.loadConnectionUri(connectionUri);
      reco9.createItem("iPad", "ipad", function(error, body){
        expect(Promise.resolve(error)).to.eventually.equal(null);
        expect(Promise.resolve(body.data[0][0].data.id)).to.eventually.equal('ipad').notify(done);
      });
  });

  it('check that deleting item node works', function(done) {
      this.timeout(10000);
      reco9.loadConnectionUri(connectionUri);
      reco9.deleteItem("ipad", function(error, body){
        expect(Promise.resolve(error)).to.eventually.equal(null);
        expect(Promise.resolve(Object.keys(body))).to.deep.eventually.equal(['columns','data']).notify(done);
      });
  });


});
