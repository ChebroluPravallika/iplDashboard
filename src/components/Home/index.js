import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const list = await fetch('https://apis.ccbp.in/ipl')
    const response = await list.json()
    const updatedList = response.teams.map(eachItem => ({
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
      id: eachItem.id,
    }))
    this.setState({teamsList: updatedList, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamsList} = this.state
    return (
      <ul className="cardContainer">
        {teamsList.map(each => (
          <TeamCard each={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div>
        <div className="cardContainer">
          <div
            style={{display: 'flex', flexDirection: 'row'}}
            className="Heading"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="iplLogoImg"
            />
            <h1>IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}

export default Home
