import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentsList, deleteComment, onClickLikeToggle} = props
  const {name, comments, id, like, initialClassName, date} = commentsList
  const isLike = like ? 'button active' : 'button'
  const initial = name ? name[0].toUpperCase() : ''
  const likeChnage = like
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const onClickLike = () => {
    onClickLikeToggle(id)
  }

  return (
    <li className="list-items">
      <div className="name-comment-button-like">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <h1>{name}</h1>
        <p>{postedTime} ago</p>
        <p>{comments}</p>
        <button onClick={onClickLike} type="button" className={isLike}>
          <img src={likeChnage} alt="like" />
          Like
        </button>
      </div>
      <div className="delete-container">
        <button onClick={onDeleteComment} type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
