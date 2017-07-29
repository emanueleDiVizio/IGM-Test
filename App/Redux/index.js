import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import {reducer as navRedux} from './NavigationRedux'
import {reducer as configRedux} from './ConfigRedux'
import {reducer as movieRedux} from './MovieDetailsRedux'
import {reducer as searchRedux} from './SearchMovieRedux'
export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: navRedux,
    config: configRedux,
    movieDetails: movieRedux,
    searchMovie: searchRedux,
  })

  return configureStore(rootReducer, rootSaga)
}
