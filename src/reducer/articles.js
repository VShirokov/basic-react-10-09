import { DELETE_ARTICLE, FETCH_ARTICLES } from '../constants'
// import defaultArticles from '../fixtures'

export default (articlesState = [], action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_ARTICLES:
      return (articlesState = payload.data)
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)
  }

  return articlesState
}
