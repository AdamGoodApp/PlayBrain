import { playersMock } from "./data";

const regionEnum = {
  Japan: "jp",
  Taiwan: "tw",
  "Hong Kong": "hk",
  "South East Asia": "sea"
};

// Times by -1 to order by DESC
const compare = (a, b) => {
  if (a.likeCount < b.likeCount) {
    return -1 * -1;
  }
  if (a.likeCount > b.likeCount) {
    return 1 * -1;
  }
  return 0;
};

const calcTotalVotes = (items, prop) => {
  return items.reduce((a, b) => {
    return a + b[prop];
  }, 0);
};

const filterByRegion = region => {
  const area = regionEnum[region];
  const players = playersMock.filter(player => player.teams == area);
  const regionCount = calcTotalVotes(players, "likeCount");

  return { players: players, regionCount: regionCount };
};

const filterByLikes = players => {
  return players.sort(compare);
};

export const Players = region => {
  const filterRegion = filterByRegion(region);
  const players = filterByLikes(filterRegion.players);

  return { players: players, regionCount: filterRegion.regionCount };
};
