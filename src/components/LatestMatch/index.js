import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div>
        <h1 style={{color: '#ffffff'}}>Latest Matches</h1>
        <div
          style={{
            backgroundColor: 'black',
            width: '80%',
            margin: 'auto',
            padding: '20px',
          }}
        >
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{color: 'white'}}>
              <h1>{competingTeam}</h1>
              <p>{date}</p>
              <p>{venue}</p>
              <p>{result}</p>
            </div>
            <div className="teamImage">
              <img src={competingTeamLogo} alt={competingTeam} />
            </div>
            <div>
              <div style={{color: 'white'}}>
                <p>First Innings</p>
                <p>{firstInnings}</p>
              </div>
              <div style={{color: 'white'}}>
                <p>Second Innings</p>
                <p>{secondInnings}</p>
              </div>
              <div style={{color: 'white'}}>
                <p>Man Of The Match</p>
                <p>{manOfTheMatch}</p>
              </div>
              <div style={{color: 'white'}}>
                <p>Umpires</p>
                <p>{umpires}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
