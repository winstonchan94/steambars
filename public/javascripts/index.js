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


  var myChart = new Chart(barGraph, {
    type: 'horizontalBar',
    data: {
        labels: allGames,
        datasets: [{
            label: 'Player Count',
            data: allPlayers,
            backgroundColor: [
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
                'rgba(76, 165, 44, .8)',
            ],
            borderColor: [
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
                'rgba(76, 165, 44, 1)',
            ],
            borderWidth: 1
        },

      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      legend: {
        labels: {
          fontColor: 'white',
        }
      },
      title: {
        display: true,
        fontColor: 'white',
        text: 'Top 25 Currently Played Steam Games'
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'white',
                    fontSize: 12
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'white'
                }
            }]
        }
    }
  });




});








//hello
