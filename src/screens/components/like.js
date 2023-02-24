import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

function Like() {
  const [likes, setLikes] = useState(0)
  const [clicked, setClicked] = useState(false)

  function incrementLikesNumber() {
    if (clicked) {
      setLikes(likes - 1)
      setClicked(false)
    } else {
      setLikes(likes + 1)
      setClicked(true)
    }
  }

  return (
    <div className='likes'>
      <div>
      <FaHeart onClick={incrementLikesNumber} color={clicked ? "red" : "inherit"}/>
      </div>
      <div>
      <p>{likes}</p>
      </div>
    </div>
  )
}

export default Like;
