/**
 * Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * More info at https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

import axios from 'axios';
import querystring from 'querystring';

import dotenv from 'dotenv';
dotenv.config();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const auth_base_64 = btoa(`${client_id}:${client_secret}`);

// your application requests authorization
const authOptions = {
  method: 'post',
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Content-Type':'application/x-www-form-urlencoded',
    'Authorization': `Basic ${auth_base_64}`,
  },
  data: querystring.stringify({grant_type: 'client_credentials'})
};

axios(authOptions)
  .then(function(response) {
    // use the access token to access the Spotify Web API
    const token = response.data.access_token;
    const options = {
      method: 'get',
      url: `https://api.spotify.com/v1/shows/${process.env.SPOTIFY_SHOW_ID}/episodes?market=ES`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    axios(options).then(function(response) {
      const episodes = response.data.items;
      console.log(`${episodes.length} episodes from Spotify`);
    });
  })
  .catch(error => console.log(error));