import './index.css'

const EmojiCard = props => {
  const {eachItem, clickedImage} = props
  const {emojiName, emojiUrl, id} = eachItem

  const funCall = () => {
    clickedImage(id)
  }

  return (
    <li className="liCon">
      <img src={emojiUrl} alt={emojiName} onClick={funCall} />
    </li>
  )
}

export default EmojiCard
