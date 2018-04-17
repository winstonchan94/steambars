export const fetchPlayerCount = (gameId) => {
  return $.ajax({
    method: 'GET',
    url: `/${gameId}/playercount`
  });
};
