import {fetchPlayerCount} from './api_util';

export const steamGames = {
  "PLAYERUNKNOWN'S BATTLEGROUNDS": 578080,
  "Dota 2": 570,
  "Counter-Strike: Global Offensive": 730,
  "Tom Clancy's Rainbow Six Siege": 359550,
  "Warframe": 230410,
  "Grand Theft Auto V": 271590,
  "Football Manager 2018": 624090,
  "Team Fortress 2": 440,
  "ARK: Survival Evolved": 346110,
  "Rocket League": 252950,
  "Garry's Mod": 4000,
  "Rust": 252490,
  "PAYDAY 2": 218620,
  "Sid Meier's Civilization V": 8930,
  "Path of Exile": 238960,
  "Paladins": 444090,
  "Arma 3": 107410,
  "Far Cry 5": 552520,
  "Terraria": 105600,
  "Sid Meier's Civilization VI": 289070,
  "Euro Truck Simulator 2": 227300,
  "Counter-Strike": 10,
  "Hearts of Iron IV": 394360,
  "War Thunder": 236390,
  "The Witcher 3: Wild Hunt": 292030
};

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



// forEach(gameName => {
//   fetchPlayerCount(steamGames[gameName])
//   .then(gameInfo => { results[gameName] = gameInfo.player_count;});
// });
export {createHash};
