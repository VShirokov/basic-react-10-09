import { FILTER_NAME_ARTICLE } from '../constants'
import defaultArticles from '../fixtures'

export default (filtered = [], action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_NAME_ARTICLE:
      return (filtered = payload.articles.filter((article) =>
        payload.names.includes(article.title)
      ))
  }

  return filtered
}
