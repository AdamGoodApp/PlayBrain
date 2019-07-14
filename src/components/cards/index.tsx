import React, { Component } from "react";

import "./index.scss";

const factions = [
  {
    id: 1,
    region: "Ionia",
    brand:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ae/Ionia_Crest.png/revision/latest/scale-to-width-down/300?cb=20161117020756",
    crest:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/fc/Ionia_Crest_icon.png/revision/latest?cb=20161117013644"
  },
  {
    id: 2,
    region: "Noxus",
    brand:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e9/Noxus_Crest.png/revision/latest?cb=20161117055949",
    crest:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/38/Noxus_Crest_icon.png/revision/latest/scale-to-width-down/55?cb=20161117055828"
  },
  {
    id: 3,
    region: "Freljord",
    brand:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/0d/Freljord_crest.png/revision/latest/scale-to-width-down/300?cb=20161117021436",
    crest:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4e/Freljord_Crest_icon.png/revision/latest/scale-to-width-down/35?cb=20161117021429"
  },
  {
    id: 4,
    region: "Demacia",
    brand:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/04/Demacia_Crest.png/revision/latest?cb=20180116201503",
    crest:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e3/Demacia_Crest_icon.png/revision/latest/scale-to-width-down/28?cb=20161117051622"
  }
];

class Card extends Component<any, any> {
  Arrow = () => (
    <div className="arrow">
      <svg
        version="1.0"
        x="0px"
        y="0px"
        viewBox="0 0 162 70.28"
        fill="#937341"
        style={{ width: "12.5px" }}
      >
        <circle fill="#937341" cx="31.57" cy="35.21" r="11.57" />
        <g>
          <polygon
            fill="#937341"
            points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"
          />
          <rect x="84.61" y="29.76" fill="#937341" width="65" height="11.06" />
        </g>
      </svg>
    </div>
  );

  Card = ({ crest, brand, region }: any) => (
    <div className="card">
      <div className="bg" />
      <div className="card-front-img">
        <img src={brand} alt="Brand" />
      </div>
      <div className="card-info">
        <div className="card-info-section">
          <div className="card-info__faction">
            <div className="card-info__name">Region</div>
            <div className="card-info__region">{region}</div>
          </div>
          <div className="card-info__crest">
            <img src={crest} />
          </div>
        </div>
        <div className="see-more">
          View Region
          <this.Arrow />
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <div className="card-container">
        {factions.map(faction => (
          <this.Card
            key={faction.id}
            crest={faction.crest}
            brand={faction.brand}
            region={faction.region}
          />
        ))}
      </div>
    );
  }
}

export default Card;
