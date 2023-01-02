import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore} = this.props

    console.log(score, topScore)
    return (
      <nav className="navEle">
        <div className="logoCon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="aspect"
          />
          <p>Emoji Game</p>
        </div>
        <div className="scoreCon">
          <p className="paraa">Score:{score}</p>
          <p>Top Score:{topScore}</p>
        </div>
      </nav>
    )
  }
}

export default NavBar
