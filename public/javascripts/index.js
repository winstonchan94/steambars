import { fetchPlayerCount, fetchTopTwitchGames } from './api_util';
import { steamGames, createHash } from './bars';
import Chart from 'chart.js';

const strategy = ['Dota 2', "Sid Meier's Civilization V", "Sid Meier's Civilization VI", "Hearts of Iron IV"];
const shooter = ["PLAYERUNKNOWN'S BATTLEGROUNDS", "Counter-Strike: Global Offensive", "Tom Clancy's Rainbow Six Siege", "Warframe", "Team Fortress 2", "Far Cry 5",
"Counter-Strike", "War Thunder", "Arma 3", "PAYDAY 2"];
const rpg = ["Warframe", "Path of Exile", "Terraria", "The Witcher 3: Wild Hunt"];
const sim = ["Garry's Mod", "Football Manager 2018", "Arma 3", "War Thunder", "Euro Truck Simulator"];
const action = ["ARK: Survival Evolved", "Rust", "Path of Exile", "Paladins"];
const sports = ["Football Manager 2018",  "Rocket League", "Euro Truck Simulator 2"];


document.addEventListener('DOMContentLoaded', async function(){
  window.createHash = createHash;
  window.fetchTopTwitchGames = fetchTopTwitchGames;
  const barGraph = document.getElementById("steam-bars");
  let steamHash = {};
  let sortedSteamHash;
  let steamNames = Object.keys(steamGames);
  let steamResponses;
  await createHash().then(result => {steamResponses = Object.values(result);});
  let steamPlayers = steamResponses.map(item => item.response.player_count);
  for (var i = 0; i < steamNames.length; i++) {
    steamHash[steamNames[i]] = steamPlayers[i];
  }
  let stratGames = {};
  let shootGames;
  let rpgGames;
  let simGames;
  let actionGames;
  let sportsGames;

  function getSortedHash(inputHash){
    var resultHash = {};
    var keys = Object.keys(inputHash);
    keys.sort(function(a, b) {
      return inputHash[a] - inputHash[b]
    }).reverse().forEach(function(k) {
      resultHash[k] = inputHash[k];
    });
    return resultHash;
  }

  sortedSteamHash = getSortedHash(steamHash);
  let allGames = Object.keys(sortedSteamHash);
  let allPlayers = Object.values(sortedSteamHash);
  allGames.filter(game => strategy.includes(game)).forEach(game => {
    stratGames[game] = sortedSteamHash[game];
  });

  debugger;

  var myChart = new Chart(barGraph, {
    type: 'horizontalBar',
    data: {
        labels: allGames,
        datasets: [{
            label: 'Top 25 Games',
            data: allPlayers,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        },

      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true, 
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });

});
