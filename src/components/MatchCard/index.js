import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
    return (
      <li>
        <img src={competingTeamLogo} alt={competingTeam} />
        <h1>{competingTeam}</h1>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
