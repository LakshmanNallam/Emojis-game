import './index.css'

const WinOrLose = props => {
  const {con, playAgin} = props

  const PlagainFuncall = () => {
    playAgin()
  }
  return con ? (
    <div className="resultCon">
      <p>LOst</p>
      <img src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" />
      <button type="button" onClick={PlagainFuncall}>
        Play Again
      </button>
    </div>
  ) : (
    <div className="resultCon">
      <p>Won</p>
      <img src="https://assets.ccbp.in/frontend/react-js/won-game-img.png" />
      <button type="button" onClick={PlagainFuncall}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLose
