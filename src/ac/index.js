import {
  DELETE_ARTICLE,
  INCREMENT,
  FETCH_ARTICLES,
  FILTER_NAME_ARTICLE
} from '../constants'
import articles from '../fixtures'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function fetchArticles(data) {
  return {
    type: FETCH_ARTICLES,
    payload: { data }
  }
}

export function filterNameArticle(articles, names) {
  return {
    type: FILTER_NAME_ARTICLE,
    payload: {
      articles,
      names
    }
  }
}
