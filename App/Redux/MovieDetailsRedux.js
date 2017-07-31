import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  movieDetailsRequest: ['id'],
  movieDetailsSuccess: ['payload'],
  movieDetailsFailure: null,
  toggleFavorite: null
})

export const MovieDetailsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  movie: {},
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { id }) =>
  state.merge({ fetching: true, id, payload: null })

// successful api lookup
export const success = (state, action) => {
  const  movie  = action.payload
  return state.merge({ fetching: false, error: null, movie })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })


export const toggleFavorite = state =>
  state.updateIn(["movie", "favorite"], fav => !fav);

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MOVIE_DETAILS_REQUEST]: request,
  [Types.MOVIE_DETAILS_SUCCESS]: success,
  [Types.MOVIE_DETAILS_FAILURE]: failure,
  [Types.TOGGLE_FAVORITE]: toggleFavorite
})
