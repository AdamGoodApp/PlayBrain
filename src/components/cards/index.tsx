import React, { Component } from "react";

import "./index.scss";

interface Props {
  regions: Array<Region>;
  setRegion: any;
}

interface Region {
  id: Number;
  region: String;
  brand: String;
  crest: String;
}

class Card extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

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
        <div
          className="see-more"
          onClick={() => this.onCardClick(region)}
          style={{ cursor: "pointer" }}
        >
          View Region
          <this.Arrow />
        </div>
      </div>
    </div>
  );

  onCardClick = (region: String) => {
    const { setRegion } = this.props;
    setRegion(region);
  };

  render() {
    const reg = this.props.regions;

    return (
      <div className="card-container">
        {reg.map((x: Region) => (
          <this.Card
            key={x.id}
            crest={x.crest}
            brand={x.brand}
            region={x.region}
          />
        ))}
      </div>
    );
  }
}

export default Card;
