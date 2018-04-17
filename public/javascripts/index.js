import { fetchPlayerCount } from './api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.getPlayerCount = (gameId) => fetchPlayerCount(gameId).then(count => console.log(count.response)); 
});
