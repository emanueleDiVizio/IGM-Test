import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  searchMovieRequest: ['data'],
  searchMovieSuccess: ['payload'],
  searchMovieFailure: null
})

export const SearchMovieTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  movies: [],
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { movies }) =>
  state.merge({ fetching: true, movies, payload: null })

// successful api lookup
export const success = (state, action) => {
  const movies = action.payload
  return state.merge({ fetching: false, error: null, movies })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_MOVIE_REQUEST]: request,
  [Types.SEARCH_MOVIE_SUCCESS]: success,
  [Types.SEARCH_MOVIE_FAILURE]: failure
})
