import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard'
import WinOrLose from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {array: [], isGameOver: false, score: 0, topScore: 0}

  clickedImage = id => {
    const {array, score, topScore} = this.state
    if (array.includes(id) || score === 11) {
      if (score === 11) {
        if (array.includes(id)) {
          console.log('endhuku vachoindhu')
          this.setState({
            isGameOver: true,
            array: [],
            islose: topScore >= score,
            topScore: score,
          })
        } else {
          console.log('vachindhi', score + 1, score + 1)
          const finalScore = score + 1
          console.log(topScore)
          this.setState({
            isGameOver: true,
            array: [],
            islose: false,
            score: score + 1,
            topScore: score + 1,
          })
        }
      } else {
        this.setState({
          isGameOver: true,
          array: [],
          islose: topScore >= score,
          topScore: topScore <= score ? score : topScore,
        })
      }
    } else {
      this.setState({array: [...array, id], score: score + 1})
    }
  }

  playAgin = () => {
    this.setState({score: 0, isGameOver: false})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const emojisList = this.shuffledEmojisList()
    const {isGameOver, score, topScore, islose} = this.state
    console.log(topScore)
    return (
      <div className="mainDiv">
        <NavBar score={score} topScore={topScore} />
        <div className="LowerCon">
          <ul className="CardCon">
            {isGameOver ? (
              <WinOrLose
                con={islose}
                playAgin={this.playAgin}
                score={score}
                topScore={topScore}
              />
            ) : (
              emojisList.map(eachItem => (
                <EmojiCard
                  eachItem={eachItem}
                  key={eachItem.id}
                  clickedImage={this.clickedImage}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame

