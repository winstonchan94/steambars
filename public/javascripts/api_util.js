export const fetchPlayerCount = (gameId) => {
  return $.ajax({
    method: 'GET',
    url: `/${gameId}/playercount`
  });
};

export const fetchTopTwitchGames = () => {
  return $.ajax({
    method: 'GET',
    url: `https://api.twitch.tv/kraken/games/top?limit=25`,
    headers: {
      'Client-ID': 'c4xf7iasrivwhmuwvq57rz1l2o3181'
    },
  });
};
