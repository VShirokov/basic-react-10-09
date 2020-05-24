import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filterArticles from './filterArticles'

export default combineReducers({
  counter: counterReducer,
  filtered: filterArticles,
  articles
})
