import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
    const clsName = matchStatus === 'Won' ? 'won' : 'lose'

    return (
      <li className="matchCard">
        <img
          src={competingTeamLogo}
          alt={`latest-match ${competingTeam}`}
          className="image"
        />
        <p className="heading">{competingTeam}</p>
        <p>{result}</p>
        <p className={clsName}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
