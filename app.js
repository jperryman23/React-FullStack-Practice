// create server
const express = require('express')
const bodyParser = require('body-parser')
const monk = require('monk')

const app = express()
const port = 3000

const db = monk('localhost/gameslocker')
const games = db.get('games')


// parse applications/x-www-form/urlencoded
app.use(bodyParser.urlencoded({ extend: false }))

// parse application/json
app.use(bodyParser.json())



// var store = []


// Retrieves
app.get('/api/games', function(req, res, next){
    games.find({}) get(key: ?)
    .then(function(games){
        res.json(games);
    })
    .catch(function(err) {
        res.json(err);
    })
    // res.json(store)
})


// Creates
app.post('/api/games', function(req, res, next){
    games.insert(req.body)
    .then(function(game){
        res.json(game);
    })
    .catch(function(err){
        res.json(err);
    })
    // store.push(req.body)
    res.json(req.body)
});

// Updates
// app.put('/api/games', function(req, res, next){
//      games.put(req.body)
//      .then(function(game){
//          res.json(game)
//      })
//      .catch(function(err){
//          res.json(err)
//      })
//
// });

// Delete
app.delete('api/games/:id', function(req, res, next){
    var id = req.params.id;

    games.findOneAndDelete({_id: id})
     .then(function(){
         res.json({status: 'deleted'});
     })
     .catch(function(err){
         res.json(err)
     })
})


// tell the app to listen on a port for incoming connections, and pass it callback
app.listen(port, function(){
    console.log('API listening on port ' + port);
})
