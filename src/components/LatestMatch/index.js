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
        <h1 style={{color: '#ffffff', marginLeft: '5%'}}>Latest Matches</h1>
        <div
          style={{
            backgroundColor: 'black',
            width: '90%',
            margin: 'auto',
            padding: '5%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div style={{color: 'white'}} className="teamInfo">
              <h1 className="heading">{competingTeam}</h1>
              <p>{date}</p>
              <p>{venue}</p>
              <p>{result}</p>
            </div>
            <div className="teamImage">
              <img
                src={competingTeamLogo}
                alt="latest match {competingTeam}"
                className="teamLogo"
              />
            </div>
            <div className="inningsContainer">
              <div className="Innings">
                <p className="head">First Innings</p>
                <p>{firstInnings}</p>
              </div>
              <div className="Innings">
                <p className="head">Second Innings</p>
                <p>{secondInnings}</p>
              </div>
              <div className="Innings">
                <p className="head">Man Of The Match</p>
                <p>{manOfTheMatch}</p>
              </div>
              <div className="Innings">
                <p className="head">Umpires</p>
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
