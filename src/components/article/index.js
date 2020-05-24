import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { deleteArticle } from '../../ac'
import CommentList from '../comment-list'
import './style.css'

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
  }

  state = {
    hasError: false
  }

  componentDidCatch(err) {
    console.log('---', err)
    this.setState({
      hasError: true
    })
  }

  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <h3>
          {article.title}
          <button onClick={this.handleClick} className="test__article--btn">
            {isOpen ? 'close' : 'open'}
          </button>
          <button onClick={this.handleDelete}>delete me</button>
        </h3>
        <CSSTransition
          transitionName="article"
          transitionAppear
          transitionEnterTimeout={500}
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  handleDelete = () => {
    const { article, deleteArticle } = this.props
    deleteArticle(article.id)
  }

  handleClick = () => this.props.toggleOpen(this.props.article.id)

  get body() {
    const { isOpen, article } = this.props
    if (!isOpen) return null
    if (this.state.hasError) return <div>Some Error in this article</div>

    return (
      <section className="test__article--body">
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }
}

export default connect(null, { deleteArticle })(Article)
