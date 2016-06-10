'use strict';

/**
 * Recommendation engine built on top of neo4j
 */

module.exports = function(connectionUri, restUrl, restUsername, restPassword) {
  if (arguments.length !== 4) throw 'reco9 expects 4 parameters: connectionUri, restUrl, restUsername, restPassword';
  if (typeof connectionUri !== 'string') throw 'connectionUri is not a valid string';
  if (typeof restUrl !== 'string') throw 'restUrl is not a valid string';
  if (typeof restUsername !== 'string') throw 'restUsername is not a valid string';
  if (typeof restPassword !== 'string') throw 'restPassword is not a valid string';

  return connectionUri;
};
