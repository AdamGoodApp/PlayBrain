import React, { Component } from "react";
import StarRate from "@material-ui/icons/StarRate";
import { Players, cleanRegion } from "../../lib/filterPlayers";

import "./index.scss";

interface Props {
  region: String;
}

interface State {
  region: any;
  voted: Array<String>;
}

interface Player {
  teams: String;
  participantId: String;
  nickname: String;
  country: String;
  gamerTagBattlenetServer: String;
  message: String;
  gamerTag: String;
  likeCount: Number;
  owner: String;
  avatarUrl: String;
}

class Player extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      region: cleanRegion(this.props.region),
      voted: []
    };
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

  Card = ({
    crest,
    brand,
    region,
    name,
    votes,
    regionCount,
    playerID
  }: any) => {
    const likePercentage = ((votes / regionCount) * 100).toFixed(2);
    const voted: boolean = this.state.voted.includes(playerID);

    return (
      <div
        className={"card " + (voted ? "sparkle" : "")}
        onClick={() => this.onCardClick(region, playerID)}
      >
        <div className="bg" />
        <div className="card-front-img">
          <img src={brand} alt="Brand" />
        </div>
        <div className="card-info">
          <div className="card-info-section">
            <div className="card-info__faction">
              <div className="card-info__name">Name</div>
              <div className="card-info__region">{name}</div>
            </div>
            <div className="card-info__crest">
              <StarRate />
              {likePercentage}%
            </div>
          </div>
          <div className="see-more" style={{ cursor: "pointer" }}>
            VOTE
          </div>
        </div>
      </div>
    );
  };

  // Handle vote locking by making sure user cant vote in multiple regions
  // and cant vote more than three times
  onCardClick = (region: string, playerID: string) => {
    const voteCount = this.state.voted.length;

    if (voteCount < 3 && region === this.state.region) {
      this.setState({
        voted: [...this.state.voted, playerID]
      });
    }
  };

  render() {
    const { region } = this.props;
    const { players, regionCount } = Players(region);

    return (
      <div className="card-container player-container">
        {players.map((x: any) => (
          <this.Card
            key={x.participantId}
            crest={x.avatarUrl}
            brand={x.avatarUrl}
            region={x.country}
            name={x.nickname}
            votes={x.likeCount}
            regionCount={regionCount}
            playerID={x.participantId}
          />
        ))}
      </div>
    );
  }
}

export default Player;
