'use strict';

var expect = require('chai').expect;
var reco9 = require('../reco9');

describe('#reco9 tests', function() {


  it('check that 4 params passed to reco9', function() {
    try {
      reco9();
    }
    catch(err) {
      expect(err).to.equal('reco9 expects 4 parameters: connectionUri, restUrl, restUsername, restPassword');
    }
  });

  it('check that connectionUri is a valid string', function() {
    try {
      reco9(7, "valid", "valid", "valid");
    }
    catch(err) {
      expect(err).to.equal('connectionUri is not a valid string');
    }
  });

  it('check that restUrl is a valid string', function() {
    try {
      reco9("valid", 7, "valid", "valid");
    }
    catch(err) {
      expect(err).to.equal('restUrl is not a valid string');
    }
  });

  it('check that restUsername is a valid string', function() {
    try {
      reco9("valid", "valid", 7, "valid");
    }
    catch(err) {
      expect(err).to.equal('restUsername is not a valid string');
    }
  });

  it('check that restPassword is a valid string', function() {
    try {
      reco9("valid", "valid", "valid", 7);
    }
    catch(err) {
      expect(err).to.equal('restPassword is not a valid string');
    }
  });

});
