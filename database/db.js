var MongoClient = require('mongodb').MongoClient

var state = {
  db: null,
  client: null
}

exports.connect = function(url, dbName, done) {
  if (state.db) return done()

  MongoClient.connect(url, function(err, client) {
    if (err) return done(err)
    state.client = client
    state.db = client.db(dbName)
    done()
  })
}

exports.get = function() {
  return state.db
}

exports.close = function(done) {
  if (state.db) {
    state.client.close(function(err, result) {
      state.client = null
      state.db = null
      state.mode = null
      done(err)
    })
  }
}
