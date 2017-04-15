'use strict';

var fs = require('fs');
var http = require('http');
var createHandler = require('github-webhook-handler');
var GitHubApi = require('github');

var github = new GitHubApi();

var secret = '';
fs.readFile('.config', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
});

var handler = createHandler({path: '/webhook', secret: secret});

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(7777);

handler.on('error', function (err) {
  console.error('Error:', err.message);
});

handler.on('pull_request', function (event) {
  console.log('Received a pull_request event for %s action: %s',
    event.payload.repository.name,
    event.payload.action);

  switch(event.action) {
    case 'opened':
        console.log('Opened')
    break;
    case 'edited':
        console.log('Edited')
    break;
    case 'reopened':
        console.log('Reopened')
    break;
    default:
        console.log('No matching action')
    break;
  }

  // Check stuff here

  // Write comments here
});

