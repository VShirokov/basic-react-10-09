import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import { fetchArticles } from './ac'
import defaultArticles from './fixtures'

class App extends Component {
  componentDidMount() {
    const { hadleFetchArticles } = this.props
    hadleFetchArticles(defaultArticles)
  }

  render() {
    const { articles, filtered } = this.props
    const actualArticles = !!filtered.length ? filtered : articles
    return (
      <div>
        <UserForm />
        <Counter />
        <Filters articles={articles} />
        <ArticleList articles={actualArticles} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
  filtered: state.filtered
})

const mapDispatchToProps = {
  hadleFetchArticles: fetchArticles
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
