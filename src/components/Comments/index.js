import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comments: '', commentsList: [], count: 0}

  onAddComments = event => {
    event.preventDefault()
    const {name, comments} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComments = {
      id: uuidv4(),
      name,
      comments,
      date: new Date(),
      like: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevous => ({
      commentsList: [...prevous.commentsList, newComments],
      name: '',
      comments: '',
    }))
    this.setState(prevous => ({count: prevous.count + 1}))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComments = event => {
    this.setState({comments: event.target.value})
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const deleteCom = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: deleteCom})
    this.setState(prevous => ({count: prevous.count - 1}))
  }

  onClickLikeToggle = id => {
    this.setState(prevous => ({
      commentsList: prevous.commentsList.map(each => {
        if (id === each.id) {
          return {...each, like: !each.like}
        }
        return each
      }),
    }))
  }

  render() {
    const {name, comments, commentsList, count} = this.state
    return (
      <div className="app-container">
        <div className="app-container2">
          <div className="second-container">
            <h1>Comments</h1>
            <p>Say Something for about 4.0 Technology</p>
            <form onSubmit={this.onAddComments}>
              <div className="search-textarea">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Your Name"
                  onChange={this.onChangeName}
                  value={name}
                />
                <textarea
                  rows="9"
                  cols="30"
                  className="textarea-input"
                  placeholder="Your Comment"
                  onChange={this.onChangeComments}
                  value={comments}
                />
              </div>

              <div>
                <button type="submit" className="button-style">
                  Add Comments
                </button>
              </div>
            </form>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comments-png"
              alt="comments"
            />
          </div>
        </div>

        <hr width="80%" />
        <div className="count-comments">
          <p className="comment-count">{count}</p>
          <p>Comments</p>
        </div>

        <ul className="unorder-list">
          {commentsList.map(each => (
            <CommentItem
              key={each.id}
              commentsList={each}
              deleteComment={this.deleteComment}
              onClickLikeToggle={this.onClickLikeToggle}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
