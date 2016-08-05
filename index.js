var alexa = require('alexa-app');
var app = new alexa.app();
require('dotenv').config();

console.log(process.env);

var Twitter = require('twitter');
var client = new Twitter({
	consumer_key: process.env.consumer_key,
	consumer_secret: process.env.consumer_secret,
	access_token_key: process.env.access_token_key,
	access_token_secret: process.env.access_token_secret
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if (!error) {
		console.log(tweets, 'here');
	}
	console.log(response);
});
client.post('statuses/update', {status: 'I Love Twitter for real'},  function(error, tweet, response) {
	if(error) {
	  console.log(error);
	  throw error;
  }
	console.log(tweet, 'no, here');  // Tweet body.
	console.log(response, 'no way ');  // Raw response object.
});