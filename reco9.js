'use strict';

/**
 * Recommendation engine built on top of neo4j
 */

var reco9 = {};

reco9.loadConfigFile = function(path) {
  var config = require(path);
  var reco9config = config.reco9;
  this.loadConfigJson(reco9config);
}

reco9.loadConfigJson = function(reco9config) {
  this.neo4j = reco9config.neo4j;

  if (typeof this.neo4j.connectionUri !== 'string') throw 'connectionUri is not a valid string';
  if (typeof this.neo4j.restUrl !== 'string') throw 'restUrl is not a valid string';
  if (typeof this.neo4j.restUsername !== 'string') throw 'restUsername is not a valid string';
  if (typeof this.neo4j.restPassword !== 'string') throw 'restPassword is not a valid string';
}



module.exports = reco9;
