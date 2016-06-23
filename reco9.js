'use strict';
var request = require('request');

/**
 * Recommendation engine built on top of neo4j
 */

var reco9 = {};


reco9.loadConnectionUri = function(connectionUri) {
  reco9.connectionUri = connectionUri;
  if (typeof reco9.connectionUri !== 'string') throw 'connectionUri is not a valid string';
}

reco9.createPersonIdConstraint = function(callback) {
  var query = 'CREATE CONSTRAINT ON (p:Person) ASSERT p.id IS UNIQUE';
  reco9.runCypher(query, {}, callback);
}

reco9.createItemIdConstraint = function(callback) {
  var query = 'CREATE CONSTRAINT ON (i:Item) ASSERT i.id IS UNIQUE';
  reco9.runCypher(query, {}, callback);
}

reco9.createPerson = function(name, id, callback) {
  var query = 'MERGE (p:Person {name:"' + name + '", id:"' + id + '"}) RETURN p';
  reco9.runCypher(query, {}, callback);
}

reco9.deletePerson = function(id, callback) {
  var query = 'MATCH (p:Person { id:"' + id + '"}) DETACH DELETE p';
  reco9.runCypher(query, {}, callback);
}

reco9.createItem = function(name, id, callback) {
  var query = 'MERGE (i:Item {name:"' + name + '", id:"' + id + '"}) RETURN i';
  reco9.runCypher(query, {}, callback);
}


reco9.deleteItem = function(id, callback) {
  var query = 'MATCH (i:Item { id:"' + id + '"}) DETACH DELETE i';
  reco9.runCypher(query, {}, callback);
}

reco9.runCypher = function(query, params, callback) {

    request({
      uri: reco9.connectionUri + '/db/data/cypher',
      method: "POST",
      Accept: "application/json; charset=UTF-8",
      "Content-Type": "application/json",
      form: {
        query: query,
        params: params
      }
    }, function(error, response, body) {
        callback(error, JSON.parse(body));
    });

}



module.exports = reco9;
