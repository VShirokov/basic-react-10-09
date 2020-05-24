import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { filterNameArticle } from '../../ac'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  state = {
    selected: null
  }

  handleChange = (selected) => {
    const { handleFilterNameArticle, articles } = this.props
    this.setState({ selected })
    const names = selected.map((elem) => elem.label)
    console.log(names)
    handleFilterNameArticle(articles, names)
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.state.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles
})

const mapDispatchToProps = {
  handleFilterNameArticle: filterNameArticle
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter)
