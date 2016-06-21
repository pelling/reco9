'use strict';
var request = require('request');

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


reco9.createPerson = function(name, id, callback) {
  var query = 'CREATE (p:Person {name:"' + name + '", id:"' + id + '"}) RETURN p';
  reco9.runCypher(query, {}, callback);

}


reco9.createItem = function(name, id, callback) {
  var query = 'CREATE (i:Item {name:"' + name + '", id:"' + id + '"}) RETURN i';
  reco9.runCypher(query, {}, callback);

}


reco9.runCypher = function(query, params, callback) {

    request({
      uri: reco9.neo4jConfig.connectionUri + '/db/data/cypher',
      method: "POST",
      Accept: "application/json; charset=UTF-8",
      "Content-Type": "application/json",
      form: {
        query: query,
        params: params
      }
    }, function(error, response, body) {
      callback(JSON.parse(body));
    });

}



module.exports = reco9;
