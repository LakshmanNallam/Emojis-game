/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard'
import WinOrLose from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {array: [], isGameOver: false, score: 0, topScore: 0}

  clickedImage = id => {
    const {array, score, topScore} = this.state
    if (array.includes(id)) {
      if (topScore < score) {
        this.setState({
          isGameOver: true,
          topScore: score,
          array: [],
          islose: false,
        })
      } else {
        this.setState({isGameOver: true, array: [], islose: true})
      }
    } else {
      this.setState({array: [...array, id], score: score + 1})
      console.log('No')
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
    const {array, isGameOver, score, topScore, islose} = this.state
    console.log(array, score)
    return (
      <div className="mainDiv">
        <NavBar score={score} topScore={topScore} />
        <div className="LowerCon">
          <ul className="CardCon">
            {isGameOver ? (
              <WinOrLose con={islose} playAgin={this.playAgin} />
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
