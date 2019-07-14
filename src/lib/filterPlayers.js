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

const filterByRegion = region => {
  const area = regionEnum[region];

  return playersMock.filter(player => player.teams == area);
};

const filterByLikes = players => {
  return players.sort(compare);
};

export const Players = region => {
  const filterRegion = filterByRegion(region);
  const players = filterByLikes(filterRegion);

  return players;
};
