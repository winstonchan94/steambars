import { fetchPlayerCount, fetchTopTwitchGames } from './api_util';
import { steamGames, createHash } from './bars';
import Chart from 'chart.js';

document.addEventListener('DOMContentLoaded', async function(){
  window.createHash = createHash;
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

  var myChart = new Chart(barGraph, {
    type: 'horizontalBar',
    data: {
        labels: Object.keys(sortedSteamHash),
        datasets: [{
            label: 'Current Players',
            data: Object.values(sortedSteamHash),
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
        }]
    },
    options: {
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
