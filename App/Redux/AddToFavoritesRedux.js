import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addToFavoritesRequest: ['movie'],
  addToFavoritesSuccess: ['favorite'],
  addToFavoritesFailure: null,
  removeFromFavorites: ['favorite']
})

export const AddToFavoritesTypes = Types
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
export const request = (state, { movie }) =>
  state.merge({ fetching: true, payload: null })

// successful api lookup
export const success = (state, action) => {
  console.tron.log(action)
  console.tron.log(state)
  const { favorite } = action
  return state.merge({ fetching: false, error: null}).update("movies", arr => arr.concat([favorite]));

}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

export const remove = (state, action) => {

  const {favorite} = action
  console.tron.log(state)
  const index = state.movies.findIndex(movie => movie.id === favorite.id)
  console.tron.log(index)
  return state.merge({ fetching: false, error: null}).update("movies", arr => arr.slice(0, index).concat(arr.slice(index + 1)));

}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TO_FAVORITES_REQUEST]: request,
  [Types.ADD_TO_FAVORITES_SUCCESS]: success,
  [Types.ADD_TO_FAVORITES_FAILURE]: failure,
  [Types.REMOVE_FROM_FAVORITES]: remove
})
