import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import {reducer as navRedux} from './NavigationRedux'
import {reducer as configRedux} from './ConfigRedux'
import {reducer as movieRedux} from './MovieDetailsRedux'
import {reducer as searchRedux} from './SearchMovieRedux'
import {reducer as favoriteRedux} from './AddToFavoritesRedux'
export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: navRedux,
    config: configRedux,
    movieDetails: movieRedux,
    searchMovie: searchRedux,
    favorites: favoriteRedux
  })

  return configureStore(rootReducer, rootSaga)
}
