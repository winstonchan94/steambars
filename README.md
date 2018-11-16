[SteamBars](http://steam-bars.herokuapp.com)

SteamBars is a single page web application designed to graphically represent the popularity of games being played on Steam and spectated on Twitch in real time. 

## Technologies used
  * Backend
    * Node.js
    * Express
  * Front End
    * Vanilla Javascript
    * Chart.js
    * d3
    * HTML
    * CSS
 
## Features
  * Steam Bars
    * Users are presented with a bar graph constructed using Chart.js respresenting the current number of players on each of Steam's most       played games.
    
  ![Imgur](https://i.imgur.com/kGd71VR.png)
  
  * Twitch Balls
    * Users can peruse a graphical representation made with d3 of Twitch's currently most viewed games.
    
  ![Imgur](https://i.imgur.com/RHlTIKy.png)

## Functionality
  * Player/viewer counts obtained through public API calls to both Twitch and Steam.
  ```Javascript
  app.get('/:gameId/playercount', (req, res) => {
  let results;
  let gameId = req.params.gameId;
  fetch(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?key=${steamKey}&appid=${gameId}`)
    .then(function(response) {
        return response.text();
    }).then(function(body) {
      results = JSON.parse(body);
        console.log(typeof body);
        console.log(body.length);
        console.log(JSON.parse(body)[0]);
        res.send(results);
    });

  });

 export const fetchTopTwitchGames = () => {
  return $.ajax({
    method: 'GET',
    url: `https://api.twitch.tv/kraken/games/top?limit=25`,
    headers: {
      'Client-ID': 'c4xf7iasrivwhmuwvq57rz1l2o3181'
    },
  });
  };
  ```
  
