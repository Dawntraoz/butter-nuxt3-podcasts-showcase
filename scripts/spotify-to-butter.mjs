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

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const authBase64 = btoa(`${clientId}:${clientSecret}`);

// your application requests authorization
const authOptions = {
  method: 'post',
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Content-Type':'application/x-www-form-urlencoded',
    'Authorization': `Basic ${authBase64}`,
  },
  data: querystring.stringify({grant_type: 'client_credentials'})
};

const getEpisodes = (options) => (axios(options).then((response) => {
  const episodes = response.data.items;
  console.log(`Download ${episodes.length} episodes data from Spotify`);

  return episodes;
}));

const spotify2Butter = (episodes) => ({
    "key": "podcast_episode", // Collection name (REQUIRED)
    "status": "published",
    "fields": episodes.map(episode => ({ // Array of mapped episodes (REQUIRED)
      "title": episode.name,
      "description": episode.description,
      "url": episode.external_urls.spotify,
      "release_date": episode.release_date,
      "cover_image": episode.images[0].url,
    }))
});

const loadEpisodes = (butterEpisodes) => {
  const tokenButterCMS = process.env.API_WRITE_TOKEN;
    
  axios("https://api.buttercms.com/v2/content/", {
    method: "POST",
    headers: {
      "Authorization": `Token ${tokenButterCMS}`,
      "Content-Type": "application/json"
    },
    data: JSON.stringify(butterEpisodes)
  })
    .then(() => {
      console.log(`Uploaded the ${butterEpisodes.fields.length} episodes to ButterCMS`);
    })
    .catch(error => console.log("Request to ButterCMS Failed: ", error));
};

axios(authOptions)
  .then(async function(response) {
    // use the access token to access the Spotify Web API
    const token = response.data.access_token;
    const show_id = process.env.SPOTIFY_SHOW_ID;
    const options = {
      method: 'get',
      url: `https://api.spotify.com/v1/shows/${show_id}/episodes?market=ES`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    
    const episodes = await getEpisodes(options);
    const butterEpisodes = spotify2Butter(episodes);

    loadEpisodes(butterEpisodes);
  })
  .catch(error => console.log("Request to Spotify Failed: ", error));