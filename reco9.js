'use strict';
var neo4j = require('neo4j');

/**
 * Recommendation engine built on top of neo4j
 */

var reco9 = {};

reco9.loadConfigFile = function(path) {
  var config = require(path);
  var reco9config = config.reco9;
  reco9.loadConfigJson(reco9config);
}

reco9.loadConfigJson = function(reco9config) {
  reco9.neo4jConfig = reco9config.neo4j;

  if (typeof reco9.neo4jConfig.connectionUri !== 'string') throw 'connectionUri is not a valid string';
}

reco9.loadDb = function(callback) {
  var neo4j = require("neo4j");
  reco9.db = new neo4j.GraphDatabase(reco9.neo4jConfig.connectionUri);
  callback();
}

reco9.createNode = function(callback) {
  var node = reco9.db.createNode({mr: 'pie'});     // instantaneous, but...
  node.save(function (err, node) {    // ...this is what actually persists.
      if (err) {
          callback(err);
      } else {
          callback(node.id);
      }
  });
}



module.exports = reco9;
