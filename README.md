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
  * The information obtained from Steam API required additional logic to create a properly sorted array of game: player objects.
  ```Javascript
  async function createHash() {
  let results = {};
  let keys = Object.keys(steamGames);
  for (var i = 0; i < keys.length; i++) {
    results[keys[i]] = fetchPlayerCount(steamGames[keys[i]]);
  }
  for (var i = 0; i < keys.length; i++) {
    results[keys[i]] = await results[keys[i]];
  }
  return results;
  };
  ```
  * TwitchBalls has responsive effects made possible by d3 libraries
  ```Javascript
        let simulation = d3.forceSimulation(data)
            .force("charge", d3.forceManyBody().strength([-90]))
            .force("x", d3.forceX())
            .force("y", d3.forceY())
            .on("tick", ticked);

        function ticked(e) {
            node.attr("cx", function(d) {
                    return d.x;
                })
                .attr("cy", function(d) {
                    return d.y;
                });
        }
        function showToolTip(d) {
          tooltip.html(d.game.name + "<br>" + d.viewers + " viewers");
          return tooltip.style("visibility", "visible");
        }
        function hideToolTip(d) {

        }
        function handleMouseOver(d) {
          let circle = d3.select(this);
          circle.transition().duration(200)
            .attr("r", function(d) {
              return scaleRadius(d.viewers) + 20;
            });
          showToolTip(d);
        }

        function handleMouseOut(d) {
          let circle = d3.select(this);
          circle.transition()
            .duration(200)
            .attr("r", function(d) {
              return scaleRadius(d.viewers);
            });
          return tooltip.style("visibility", "hidden");
        }
  ```
## Future Plans
 * Steam Bars will allow for tracking of player count fluctuations throughout 24 hour periods. For example, for PUBG on Steam it will show    a line graph denoting the change in concurrent players as time passes.
 * Steam Bars will have separate graphs per genre of game.
