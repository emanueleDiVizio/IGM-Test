import { takeLatest, throttle } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { MovieDetailsTypes } from '../Redux/MovieDetailsRedux'
import { SearchMovieTypes } from '../Redux/SearchMovieRedux'
import { ConfigTypes } from '../Redux/ConfigRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getMovieDetails } from './MovieDetailsSagas'
import { searchMovie } from './SearchMovieSagas'
import { getConfig } from './ConfigSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    // some sagas receive extra parameters in addition to an action
    takeLatest(MovieDetailsTypes.MOVIE_DETAILS_REQUEST, getMovieDetails, api),
    throttle(200, SearchMovieTypes.SEARCH_MOVIE_REQUEST, searchMovie, api),
    takeLatest(ConfigTypes.CONFIG_REQUEST, getConfig, api)
  ]
}
